(function(){
  'use strict';

  angular
    .module('angularChecklist')
    .factory('Auth', AuthService);

  /** @ngInject */
  function AuthService($firebaseAuth, FIREBASE_URL){
    return {
      _createRef: createRef,
      createUser: createUser
    };

    function createRef() {
      var ref = new Firebase(FIREBASE_URL);
      return $firebaseAuth(ref);
    }

    function createUser(email, password) {
      var auth = this._createRef();
      return auth.$createUser({email: email, password: password});
    }

  }

})();
