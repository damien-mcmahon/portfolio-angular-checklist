/* global moment:false _:false */
(function() {
  'use strict';

  angular
    .module('angularChecklist')
    .constant('moment', moment)
    .constant('firebase', window.firebase)
    .constant('FIREBASE_DATABASE_URL', 'https://checklist-4abfb.firebaseio.com')
    .constant('FIREBASE_AUTH_DOMAIN', 'checklist-4abfb.firebaseapp.com')
    .constant('_', _)
    .constant('Immutable', window.Immutable);
})();
