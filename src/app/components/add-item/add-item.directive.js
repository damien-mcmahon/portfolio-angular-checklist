(function(){
  'use strict';

  angular
    .module('angularChecklist')
    .directive('addItem', addItem);

  function addItem(){
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/add-item/add-item.template.html',
      scope: {
        'onAdd': '&'
      },
      controller: addItemController,
      controllerAs: 'vm',
      bindToController: true
    };

    function addItemController(){
      var vm = this;
      vm.addItem = function addItem() {
        if(vm.newItem && vm.newItem.length){
          vm.onAdd({newItem: vm.newItem});
          vm.newItem = '';
        }
      };
    }

    addItemController.$inject = ['$log'];

    return directive;
  }
})();
