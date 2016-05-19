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
  });
})();
