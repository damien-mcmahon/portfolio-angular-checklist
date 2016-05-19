(function(){
  'use strict';

  angular
    .module('angularChecklist')
    .directive('checklist', checklist);

  /** @ngInject */
  function checklist(){

    return {
      restrict: 'E',
      templateUrl: 'app/components/checklist/checklist.template.html',
      scope: {
        items: '='
      },
      controller: checklistController,
      controllerAs: 'vm',
      bindToController: true
    };

    /** @ngInject */
    function checklistController() {
      var vm = this;

      vm.itemsToShow = function itemsToShow(){
        return vm.items.length;
      };
    }
  }
})();
