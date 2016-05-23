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

    describe('With Items', function(){
      var $scope, newEl;

      beforeEach(inject(function($compile, _$rootScope_){
        $rootScope = _$rootScope_;
        $scope = $rootScope.$new();
        $scope.mockItem = {
          title: "First Element",
          "description": "First Element Description",
          "isActive": true
        };
        var elMarkup = '<checklist-item item="mockItem"></checklist-item>';
        newEl = compileHelpers.wrapElement(elMarkup);
        compileHelpers.compile(newEl, $scope);
      }));

      it('renders the title', function(){
        var firstEl = compileHelpers.wrapElement(newEl.find('h1')[0]);
        expect(firstEl.text().trim()).toEqual('First Element');
      });

      it('renders the description', function(){
        var firstDescription = compileHelpers.wrapElement(newEl.find('p')[0]);

        expect(firstDescription.text().trim())
          .toEqual('First Element Description');
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
    });
  });
})();
