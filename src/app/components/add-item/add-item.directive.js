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

    function addItemController($log){
      var vm = this;
      vm.addItem = function addItem() {
        vm.onAdd({newItem: vm.newItem});
      };
    }

    addItemController.$inject = ['$log'];

    return directive;
  }
})();
