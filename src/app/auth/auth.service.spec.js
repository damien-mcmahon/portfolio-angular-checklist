(function(){
  'use strict';

  describe('service AuthService', function(){
    var Auth, $firebaseAuth;
    beforeEach(module('angularChecklist'));

    beforeEach(inject(function(_Auth_,_$firebaseAuth_){
      Auth = _Auth_;
      $firebaseAuth = _$firebaseAuth_;
    }));

    it('exists', function(){
      expect(Auth).not.toBe(null);
    });

    describe('createUser()', function(){
      it('calls $createUser with the given password and email', function(){
        var $createUser = jasmine.createSpy('$createUser');
        var createRefSpy = spyOn(Auth,'_createRef').and.returnValue({
          $createUser: $createUser
        });
        var email = "test@example.com";
        var password = "password123";

        Auth.createUser(email, password);
        expect($createUser).toHaveBeenCalledWith({
          email: email,
          password: password
        });
      });
    });

  });
})();
