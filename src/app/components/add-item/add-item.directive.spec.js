(function(){
  'use strict';
  var el;
  var vm;
  var $scope;

  describe('directive checklistItem', function() {

    beforeEach(module('angularChecklist'));

    beforeEach(inject(function($compile, $rootScope, $log, compileHelpers){
      $scope = $rootScope.$new();
      $scope.add = jasmine.createSpy('add');
      var elMarkup = '<add-item on-add="add(newItem)"></add-item>';
      el = compileHelpers.wrapElement(elMarkup);
      compileHelpers.compile(el, $scope);
      vm = el.isolateScope().vm;
    }));

    it('renders the template', function(){
      expect(el.html()).not.toBe(null);
    });

    it('calls the passed function on `submit()`', function(){
      vm.newItem = 'A test Item';
      vm.addItem();
      expect($scope.add).toHaveBeenCalledWith('A test Item');
    });

    it('clears the value when an item has been submitted', function(){
      vm.newItem = 'Clear this Text';
      vm.addItem();
      expect(vm.newItem).toEqual('');
    });

    it('blocks the user from adding empty items', function(){
      vm.addItem();
      expect($scope.add).not.toHaveBeenCalled();
      vm.newItem = 'Some real text';
      vm.addItem();
      expect($scope.add).toHaveBeenCalledWith('Some real text');
    });

  });
})();
