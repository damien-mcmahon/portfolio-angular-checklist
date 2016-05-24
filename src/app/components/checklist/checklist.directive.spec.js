(function(){
  'use strict';
  var el;

  describe('directive checklist', function() {

    beforeEach(module('angularChecklist'));

    beforeEach(inject(function($compile, $rootScope, compileHelpers) {
      var elMarkup = '<checklist></checklist>';
      el = compileHelpers.wrapElement(elMarkup);
      compileHelpers.compile(el, $rootScope.$new());
    }));

    it('should be compiled', function() {
       expect(el.html()).not.toEqual(null);
    });

    it('should display a message if no items passed', function(){
      var getStartedEl = el.find('h1');
      expect(getStartedEl.text()).toEqual('Let\'s Get Started');
    });


    describe('with items to display', function(){
      var itemsToDisplay, elWithItems, $scope, compileHelpers, vm;

      beforeEach(inject(function($compile, $rootScope, _compileHelpers_){
        itemsToDisplay = [{
          id: 'cl-1',
          title: 'Item one',
          description: 'This item is first'
        },{
          id: 'cl-2',
          title: 'Item two',
          description: 'This item is second'
        },{
          id: 'cl-3',
          title: 'Item three',
          description: 'This item is last'
        }];
        compileHelpers = _compileHelpers_;
        $scope = $rootScope.$new();
        $scope.items = itemsToDisplay;
        var elMarkup = '<checklist items="items"></checklist>';
        elWithItems = compileHelpers.wrapElement(elMarkup);
        compileHelpers.compile(elWithItems, $scope);
        vm = elWithItems.isolateScope().vm;
      }));

      it('sets the first item as enabled', function(){
        var firstEl = compileHelpers.wrapElement(elWithItems.find('input')[0]);
        expect(firstEl.prop('disabled')).toBe(false);
      });

      it('disables items after the first', function(){
        var secondEl = compileHelpers.wrapElement(elWithItems.find('input')[1]);
        expect(secondEl.prop('disabled')).toBe(true);
      });

      it('enables only the second item when the first completes', function(){
        var secondEl = compileHelpers.wrapElement(elWithItems.find('input')[1]);
        expect(secondEl.prop('disabled')).toBe(true);

        vm.completeItem(itemsToDisplay[0].id, true);
        $scope.$apply();
        expect(secondEl.prop('disabled')).toBe(false);
      });

      it('sets the list complete when all are ticked', function(){
        spyOn(vm,'completedList');
        var isComplete = true;
        vm.completeItem(itemsToDisplay[0].id, isComplete);
        vm.completeItem(itemsToDisplay[1].id, isComplete);
        vm.completeItem(itemsToDisplay[2].id, isComplete);
        expect(vm.completedList).toHaveBeenCalled();
      });

      it('sets the correct item enabled when uncompleting an item', function(){
        var isComplete = true;
        vm.completeItem(itemsToDisplay[0].id, isComplete);
        vm.completeItem(itemsToDisplay[1].id, isComplete);
        isComplete = false;
        expect(itemsToDisplay[2].isComplete).not.toBe(false);
        vm.completeItem(itemsToDisplay[1].id, isComplete);
        expect(itemsToDisplay[2].isComplete).toBe(false);
      });

      it('enables uncompleting of an item at any time', function(){
        var isComplete = true;
        vm.completeItem(itemsToDisplay[0].id, isComplete);
        vm.completeItem(itemsToDisplay[1].id, isComplete);
        isComplete = false;
        vm.completeItem(itemsToDisplay[0].id, isComplete);
        expect(itemsToDisplay[0].isActive).toBe(true);
      });

    });
  });
})();
