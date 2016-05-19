(function() {
  'use strict';

  angular
    .module('angularChecklist')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(_) {
    var vm = this;
    vm.items = [];

    vm.addItemToList = function addItemToList(newItem) {
      vm.items.push(newItem);
    };

    vm.removeItemFromList = function removeItemFromList(itemId) {
      var removeIndex = _.findIndex(vm.items, ['id', itemId]);

      if(removeIndex >= 0) {
        vm.items.splice(removeIndex, 1);
      }
    };
  }
})();
