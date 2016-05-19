(function() {
  'use strict';

  angular
    .module('angularChecklist')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
