(function() {
  'use strict';

  angular
    .module('angularChecklist')
    .run(runBlock);
  /** @ngInject */
  function runBlock($log, firebase, FIREBASE_DATABASE_URL, FIREBASE_AUTH_DOMAIN) {

    var config = {
      apiKey: "AIzaSyCY4LipyQQstR0WFwBL4QhRTzCIZAj49iE",
      authDomain: FIREBASE_AUTH_DOMAIN,
      databaseURL: FIREBASE_DATABASE_URL
    };

    firebase.initializeApp(config);

    $log.debug('runBlock end');
  }

})();
