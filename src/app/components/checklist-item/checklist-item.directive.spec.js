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
        $scope.mockItem = {title: "First Element"};
        var elMarkup = '<checklist-item item="mockItem"></checklist-item>';
        newEl = compileHelpers.wrapElement(elMarkup);
        compileHelpers.compile(newEl, $scope);
      }));

      it('renders the title', function(){
        var firstEl = compileHelpers.wrapElement(newEl.find('h1')[0]);
        expect(firstEl.text().trim()).toEqual('First Element');
      });

    });
  });
})();
