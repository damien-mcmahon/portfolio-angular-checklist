(function(){
  'use strict';

  angular
    .module('angularChecklist')
    .factory('Auth', AuthService);

  /** @ngInject */
  function AuthService($firebaseAuth, FIREBASE_URL){
    return {
      authRef: null,
      _createRef: createRef,
      createUser: createUser,
      signIn: signIn
    };

    function createRef() {
      var ref = new Firebase(FIREBASE_URL);
      this.authRef = $firebaseAuth(ref);
    }

    function createUser(email, password) {
      if(!this.authRef){
        this._createRef();
      }
      return this.authRef.$createUser({email: email, password: password});
    }

    function signIn(email, password) {
      if(!this.authRef){
        this._createRef();
      }
      return this.authRef.$authWithPassword({
        email: email,
        password: password
      });
    }
  }

})();
