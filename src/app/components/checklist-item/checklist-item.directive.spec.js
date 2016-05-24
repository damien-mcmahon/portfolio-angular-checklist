(function(){
  'use strict';
  var el;
  var $rootScope;
  var compileHelpers;

  describe('directive checklistItem', function() {

    beforeEach(module('angularChecklist'));

    beforeEach(inject(function($compile, _$rootScope_, _compileHelpers_) {
      $rootScope = _$rootScope_;
      compileHelpers = _compileHelpers_;
      var elMarkup = '<checklist-item></checklist-item>';
      el = compileHelpers.wrapElement(elMarkup);
      compileHelpers.compile(el, $rootScope.$new());
    }));

    it('should be compiled', function() {
      expect(el.html()).not.toEqual(null);
    });

    describe('with Items', function(){
      var $scope, newEl, vm;

      beforeEach(inject(function($compile, $rootScope){
        $scope = $rootScope.$new();
        $scope.mockItem = {
          title: "First Element",
          "description": "First Element Description",
          "isActive": true,
          "isComplete": false
        };
        var elMarkup = '<checklist-item item="mockItem"></checklist-item>';
        newEl = compileHelpers.wrapElement(elMarkup);
        compileHelpers.compile(newEl, $scope);
        vm = newEl.isolateScope().vm;
      }));

      it('renders the title, and description', function(){
        var firstEl = compileHelpers.wrapElement(newEl.find('h1')[0]);
        var firstDescription = compileHelpers.wrapElement(newEl.find('p')[0]);

        expect(firstEl.text().trim())
          .toEqual('First Element');
        expect(firstDescription.text().trim())
          .toEqual('First Element Description');
      });

      it('sets the active class on the current active element', function(){
        var firstEl = compileHelpers.wrapElement(newEl.find('div')[0]);
        expect(
          firstEl.hasClass('checklist-item-component__is-active')
        ).toBe(true);
      });

      describe('itemIsActive()', function(){

        it('returns false if no items ', function(){
          vm.item = null;
          expect(vm.itemIsActive()).toBe(false);
        });

        it('return true when item isActive and not complete', function(){
          expect(vm.itemIsActive()).toBe(true);
        });

        it('returns false when an item is complete', function(){
          vm.item.isComplete = true;
          expect(vm.itemIsActive()).toBe(false);
        });
      });

      describe('itemIsComplete()', function(){
        it('returns false if no item passed or isComplete is false', function(){
          expect(vm.itemIsComplete()).toBe(false);
          vm.item = null;
          expect(vm.itemIsComplete()).toBe(false);
        });

        it('returns true when an item is complete', function(){
          vm.item.isComplete = true;
          expect(vm.itemIsComplete()).toBe(true);
        });
      });


      describe('the checkbox', function(){
        var checkboxEl;

        beforeEach(function(){
          checkboxEl = compileHelpers.wrapElement(newEl.find('input')[0]);
        });

        it('shows a checkbox in the item', function(){
          expect(checkboxEl.html()).not.toBeUndefined();
        });

        it('allows the user to check the item off', function(){
          expect(checkboxEl.prop('disabled')).toBe(false);
        });

        it('disables the checkbox until the item is active', function(){
          $scope.mockItem.isActive = false;
          $scope.$digest();
          expect(checkboxEl.prop('disabled')).toBe(true);
        });

        it('sets the checked property for a completed item', function(){
          $scope.mockItem.isComplete = true;
          $scope.$digest();
          expect(checkboxEl.prop('checked')).not.toBe(false);
        });
      });

      describe('onComplete()', function() {
        var elToComplete, vm, $scope;

        beforeEach(inject(function($rootScope, compileHelpers){
          $scope = $rootScope.$new();
          $scope.mockItem = {
            title: "Element To Complete",
            "description": "Complete this element",
            "isActive": true,
            "isComplete": false,
            id: 'cl-1'
          };
          $scope.handleComplete = jasmine.createSpy('handleComplete');
          var elMarkup = '<checklist-item item="mockItem" on-complete="handleComplete(itemId)"></checklist-item>';
          elToComplete = compileHelpers.wrapElement(elMarkup);
          compileHelpers.compile(elToComplete, $scope);
          vm = elToComplete.isolateScope().vm;
        }));

        it('sends the itemID to the parent function', function(){
          vm.completeItem();
          expect($scope.handleComplete).toHaveBeenCalledWith('cl-1');
        });
      });
    });
  });
})();
