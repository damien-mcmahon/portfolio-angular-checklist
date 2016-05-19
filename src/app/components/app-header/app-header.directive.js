(function(){
  'use strict';

  angular
    .module('angularChecklist')
    .directive('appHeader', appHeader);


  /** @ngInject */
  function appHeader(){
    return {
      restrict: 'E',
      templateUrl: 'app/components/app-header/app-header.template.html'
    };
  }
})();
