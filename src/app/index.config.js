(function() {
  'use strict';

  angular
    .module('angularChecklist')
    .config(config);

  /** @ngInject */
  function config($logProvider) {
    // Enable log
    $logProvider.debugEnabled(true);
  }

})();
