(function(){
  'use strict';

  angular
    .module('angularChecklist')
    .controller('SignupController', SignupController);

  /** @ngInject */
  function SignupController(ChecklistSignup, Auth) {
    var vm = this;

    vm.canSubmitForm = function canSubmitForm() {
      if(!vm.userEmail || !vm.userPassword || !vm.userPasswordConfirm) {
        return false;
      }
      return ChecklistSignup.validEmail(vm.userEmail) &&
        ChecklistSignup.validPassword(vm.userPassword, vm.userPasswordConfirm);
    };

    vm.signUpUser = function signUpUser() {
      Auth.createUser(vm.userEmail, vm.userPassword)
        .then(function(){
          //Sign the user in
          //transfer to the homepage?
        })
        .catch(function(){
          //handle errors
        });
    };
  }
})();
