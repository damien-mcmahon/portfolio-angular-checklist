(function(){
  'use strict';
  var el;
  var vm;
  var $scope;

  describe('directive checklistItem', function() {
    var mockedEvent;
    beforeEach(module('angularChecklist'));

    beforeEach(inject(function($compile, $rootScope, $log, compileHelpers){
      $scope = $rootScope.$new();
      $scope.add = jasmine.createSpy('add');

      var elMarkup = '<add-item on-add="add(newItem)"></add-item>';
      el = compileHelpers.wrapElement(elMarkup);
      compileHelpers.compile(el, $scope);
      vm = el.isolateScope().vm;

      mockedEvent = {preventDefault: function(){}};
      spyOn(_, 'uniqueId').and.returnValue('cl-1');
    }));

    it('renders the template', function(){
      expect(el.html()).not.toBe(null);
    });

    it('calls the passed function on `submit()`', function(){
      vm.newItemTitle = 'A test Item';
      vm.newItemDescription = 'A description';
      vm.addItem(mockedEvent);
      expect($scope.add).toHaveBeenCalledWith({
        id: 'cl-1',
        title: 'A test Item',
        description: 'A description'
      });
    });

    it('clears the value when an item has been submitted', function(){
      vm.newItemTitle = 'Clear this Text';
      vm.newItemDescription = 'A description';
      vm.addItem(mockedEvent);
      expect(vm.newItemTitle).toEqual('');
      expect(vm.newItemDescription).toEqual('');
    });

    it('blocks the user from adding empty items', function(){
      vm.newItemDescription = 'A desc';
      vm.addItem(mockedEvent);
      expect($scope.add).not.toHaveBeenCalled();
      vm.newItemTitle = 'Some real text';
      vm.addItem(mockedEvent);
      expect($scope.add).toHaveBeenCalledWith({
        id: 'cl-1',
        title: 'Some real text',
        description: 'A desc'
      });
    });

    it('requires a description to be set', function(){
      vm.addItem(mockedEvent);
      expect($scope.add).not.toHaveBeenCalled();
      vm.newItemTitle = 'A title but no description';

      expect($scope.add).not.toHaveBeenCalled();
      vm.newItemDescription = 'And now for a description';
      vm.addItem(mockedEvent);
      expect($scope.add).toHaveBeenCalledWith({
        id: 'cl-1',
        title: 'A title but no description',
        description: 'And now for a description'
      });
    });
  });
})();
