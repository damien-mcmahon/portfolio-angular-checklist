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
      vm.currentCompletedItem = 0;

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

          if(theChanges && theChanges.length){
            theChanges.map(function(item, index) {
              item.isActive = index <= vm.currentCompletedItem;
              return item;
            });
          }
        }
      };

      vm.completeItem = function completeItem(itemId, isComplete){
        var itemToComplete = _.findIndex(vm.items, ['id', itemId]);
        if(itemToComplete >= 0){
          if(isComplete){
            var nextItem = getNextItem(itemToComplete);
            completeItemAtIndex(itemToComplete);

            if(nextItem) {
              nextItem.isActive = true;
            } else {
              vm.completedList();
            }
          } else {
            var indexToSlice = itemToComplete + 1;

            vm.items
              .slice(indexToSlice)
              .map(function(item){
                item.isActive = false;
                item.isComplete = false;
                return item;
              });
            vm.currentCompletedItem = previousItemIndex(itemToComplete);
          }
        }
      };

      vm.completedList = function completedList(){
        //TODOE: Add a method to pass to parent
      };

      function getNextItem(index) {
        return index + 1 < vm.items.length ? vm.items[index + 1] : null ;
      }

      function completeItemAtIndex(index) {
        vm.items[index].isComplete = true;
        vm.items[index].isActive = false;
        vm.currentCompletedItem = index;
      }

      function previousItemIndex(index) {
        return index - 1  >= 0 ? index - 1 : 0;
      }
    }
  }
})();
