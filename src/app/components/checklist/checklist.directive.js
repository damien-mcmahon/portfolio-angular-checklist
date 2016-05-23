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
        items: '<'
      },
      controller: checklistController,
      controllerAs: 'vm',
      bindToController: true
    };
    /** @ngInject */
    function checklistController(_) {
      var vm = this;
      var FIRST_ITEM = 0;
      vm.itemsToShow = function itemsToShow(){
        return vm.items && vm.items.length;
      };

      vm.$onInit = function(){
        if(vm.items && vm.items.length) {
          vm.items.map(function(item, index) {
            item.isActive = index === FIRST_ITEM;
            return item;
          });
        }
      };

      vm.$onChanges = function onChanges(changes){
        if(changes.items.currentValue !== changes.items.previousValue) {
          var theChanges = changes.items.currentValue;

          if(theChanges.length){
            theChanges.map(function(item, index) {
              item.isActive = index === FIRST_ITEM;
              return item;
            });
          }
        }
      };

      vm.completeItem = function completeItem(itemId){
        var itemToComplete = _.findIndex(vm.items, ['id', itemId]);
        var nextItem = getNextItem(itemToComplete);

        if(itemToComplete >= 0){
          completeItem(itemToComplete);
        }

        if(nextItem) {
          nextItem.isActive = true;
        } else {
          vm.completedList();
        }
      };

      vm.completedList = function completedList(){
        //TODOE: Add a method to pass to parent
      };

      function getNextItem(index) {
        return index + 1 < vm.items.length ? vm.items[index + 1] : null ;
      }

      function completeItem(index) {
        vm.items[index].isComplete = true;
        vm.items[index].isActive = false;
      }
    }
  }
})();
