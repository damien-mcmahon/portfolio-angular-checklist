(function(){
  'use strict';

  describe('service AuthService', function(){
    var Auth;
    var email;
    var password;
    var $firebaseAuth;

    beforeEach(module('angularChecklist'));

    beforeEach(inject(function(_Auth_,_$firebaseAuth_){
      Auth = _Auth_;
      $firebaseAuth = _$firebaseAuth_;

      email = "test@example.com";
      password = "password123";
    }));

    it('exists', function(){
      expect(Auth).not.toBe(null);
    });

    describe('createUser()', function() {
      it('calls $createUser with the given password and email', function(){
        var $createUser = jasmine.createSpy('$createUser');

        Auth.authRef = {
          $createUser: $createUser
        };

        Auth.createUser(email, password);
        expect($createUser).toHaveBeenCalledWith({
          email: email,
          password: password
        });
      });
    });

    describe('signIn()', function(){
      it('signs a user in correctly', function(){
        var $authWithPassword = jasmine.createSpy('$authWithPassword');

        Auth.authRef = {
          $authWithPassword: $authWithPassword
        };

        Auth.signIn(email, password);
        expect($authWithPassword).toHaveBeenCalledWith({
          email: email,
          password: password
        });
      });
    });
  });
})();
