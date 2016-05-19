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
    /** @ngInject */
    function addItemController(_){
      var vm = this;
      vm.addItem = function addItem(event) {
        event.preventDefault();
        if(vm.newItem && vm.newItem.length){

          var newChecklistItem = {
            id: _.uniqueId('cl-'),
            title: vm.newItem
          };

          vm.onAdd({newItem: newChecklistItem});
          vm.newItem = '';
        }
      };
    }

    return directive;
  }
})();
