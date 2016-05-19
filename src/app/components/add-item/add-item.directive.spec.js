(function(){
  'use strict';
  var el;

  describe('directive checklistItem', function() {

    beforeEach(module('angularChecklist'));

    beforeEach(inject(function($compile, $rootScope, compileHelpers){
      var elMarkup = '<add-item></add-item>';
      el = compileHelpers.wrapElement(elMarkup);
      compileHelpers.compile(el, $rootScope.$new());
    }));

    it('renders the template', function(){
      expect(el.html()).not.toBe(null);
    });
  });
})();
