(function() {
  'use strict';

  angular
    .module('angularChecklist')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'app/about/about.html'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'app/login/login.html'
      });



    $urlRouterProvider.otherwise('/');
  }

})();
