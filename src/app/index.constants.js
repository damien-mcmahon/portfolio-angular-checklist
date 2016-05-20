/* global moment:false _:false */
(function() {
  'use strict';

  angular
    .module('angularChecklist')
    .constant('moment', moment)
    .constant('FIREBASE_URL', 'https://checklist-4abfb.firebaseio.com')
    .constant('_', _);
})();
