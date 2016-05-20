(function(){
  'use strict';

  describe('controllers - Main', function(){
    var vm;

    beforeEach(module('angularChecklist'));

    beforeEach(inject(function($controller) {
      vm = $controller('SignupController');
    }));

    describe('canSubmitForm()', function(){
      it('returns false if all required information is not present', function(){
        expect(vm.canSubmitForm()).toBe(false);
      });

      it('requires an email, password and confirmation password to be set', function(){
        vm.userEmail = 'hello@example.com';
        vm.userPassword = '123456';
        vm.userPasswordConfirm = '123456';
        expect(vm.canSubmitForm()).toBe(true);
      });
    });

    xdescribe('signUpUser()', function(){

    });
  });
})();
