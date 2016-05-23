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

      vm.hasCorrectContent = function hasCorrectContent(){
        return vm.newItemTitle && vm.newItemTitle.length &&
          vm.newItemDescription && vm.newItemDescription.length;
      };

      vm.addItem = function addItem(event) {
        event.preventDefault();
        if(vm.hasCorrectContent()){

          var newChecklistItem = {
            id: _.uniqueId('cl-'),
            title: vm.newItemTitle,
            description: vm.newItemDescription
          };

          vm.onAdd({newItem: newChecklistItem});
          vm.newItemTitle = '';
          vm.newItemDescription = '';
        }
      };
    }

    return directive;
  }
})();
