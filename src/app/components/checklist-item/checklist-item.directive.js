(function(){
  'use strict';

  angular
    .module('angularChecklist')
    .directive('checklistItem', checklistItem);

  /** @ngInject */
  function checklistItem(){
    return {
      restrict: 'E',
      templateUrl: 'app/components/checklist-item/checklist-item.template.html',
      scope: {
        item: '='
      },
      controller: checklistItemController,
      controllerAs: 'vm',
      bindToController: true
    };

    /** @ngInject */
    function checklistItemController(){}
  }
})();
