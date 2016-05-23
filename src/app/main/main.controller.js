(function() {
  'use strict';

  angular
    .module('angularChecklist')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(_, Immutable) {
    var vm = this;
    vm.items = Immutable.List();

    vm.addItemToList = function addItemToList(newItem) {
      vm.items = vm.items.push(newItem);
    };

    vm.removeItemFromList = function removeItemFromList(itemId) {
      var removeIndex = _.findIndex(vm.items.toJS(), ['id', itemId]);
      if(removeIndex >= 0) {
        vm.items = vm.items.splice(removeIndex, 1);
      }
    };
  }
})();
