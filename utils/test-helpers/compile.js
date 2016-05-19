(function(){

'use strict';

  angular
    .module('angularChecklist')
    .service('compileHelpers', function($compile) {

    function compileDirective(element, scope) {
      var compiled = $compile(element)(scope);
      scope.$apply();
      return compiled;
    }

    function wrappedElement(element) {
      return angular.element(element);
    }

    return {
      compile: compileDirective,
      wrapElement: wrappedElement
    };
  });

})();
