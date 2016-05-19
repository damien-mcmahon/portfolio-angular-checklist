(function(){
  'use strict';
  var el;

  describe('directive checklistItem', function() {

    beforeEach(module('angularChecklist'));

    beforeEach(inject(function($compile, $rootScope, compileHelpers) {
      var elMarkup = '<checklist-item></checklist>';
      el = compileHelpers.wrapElement(elMarkup);
      compileHelpers.compile(el, $rootScope.$new());
    }));

    it('should be compiled', function() {
       expect(el.html()).not.toEqual(null);
    });
  });
})();
