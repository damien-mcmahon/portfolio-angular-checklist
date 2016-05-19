/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('angularChecklist')
    .constant('moment', moment)
    .constant('FIREBASE_URL', 'checklist-4abfb.firebaseio.com');
})();
