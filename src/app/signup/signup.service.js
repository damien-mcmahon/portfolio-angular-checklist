(function(){
  'use strict';

   angular
    .module('angularChecklist')
    .factory('ChecklistSignup', checklistSignup);


    /** @ngInject */
    function checklistSignup(){
      return {
        validEmail: validEmail,
        validPassword: validPassword
      };

      function validEmail(email) {
        //taken from http://emailregex.com/
        var VALID_EMAIL_REGEX = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
        return VALID_EMAIL_REGEX.test(email);
      }

      function validPassword(password, passwordConfirm){
        var PASSWORD_MIN_LENGTH = 6;

        if(!password.length || password !== passwordConfirm) {
          return false;
        }
        return password.length >= PASSWORD_MIN_LENGTH;
      }
    }

})();
