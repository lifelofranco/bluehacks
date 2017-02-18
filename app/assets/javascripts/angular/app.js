var app = angular.module('app', [
  'ui.router',
  'ngMessages',
  'ngDialog',
  'templates',
  'ngCookies',
  'ngProgress',
  'angular-carousel',
  'app.controllers',
  'app.services'
]);

app.run(['$rootScope', '$state', 'AuthService', '$location', 'ngProgressFactory', function($rootScope, $state, AuthService, $location, ngProgressFactory) {
    AuthService.currentUser();

    $rootScope.progressbar = ngProgressFactory.createInstance();
   $rootScope.$on("$stateChangeStart", function () {
       $rootScope.progressbar.start();
   });

   $rootScope.$on("$stateChangeSuccess", function () {
       $rootScope.progressbar.complete();
   });
}]);
