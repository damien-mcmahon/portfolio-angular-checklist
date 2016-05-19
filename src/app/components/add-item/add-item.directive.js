(function(){
  'use strict';

  angular
    .module('angularChecklist')
    .directive('addItem', addItem);

  function addItem(){
    return {
      restrict: 'E',
      templateUrl: 'app/components/add-item/add-item.template.html',
      controller: addItemController,
      controllerAs: 'vm',
      bindToController: true
    };

    function addItemController(){};
  }
})();
