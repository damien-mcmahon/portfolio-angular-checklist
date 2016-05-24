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
        item: '=',
        onComplete: '&'
      },
      controller: checklistItemController,
      controllerAs: 'vm',
      bindToController: true
    };

    /** @ngInject */
    function checklistItemController(){
      var vm = this;

      vm.completeItem = function completeItem() {
        vm.onComplete({itemId: vm.item.id, isComplete: vm.item.isComplete});
      };

      vm.itemIsActive = function itemIsActive(){
        return !!vm.item && vm.item.isActive && !vm.item.isComplete;
      };

      vm.itemIsComplete = function itemIsComplete() {
        return !!vm.item && vm.item.isComplete;
      };
    }
  }
})();
