goog.provide('academy.material');
goog.provide('academy.module');
goog.provide('academy.routes');

goog.require('academy.main.module');
goog.require('academy.signup.module');

/**
 * @type {angular.module}
 */
academy.module = angular.module('AcademyApp', [
  'ngRoute',
  'ngMaterial',
  academy.main.module.name,
  academy.signup.module.name
]);

/**
 * @ngInject
 * @param  {[type]} $mdThemingProvider
 */
academy.material = function($mdThemingProvider) {
  $mdThemingProvider.theme('default');
};

/**
 * @ngInject
 * @param  {angular.$routeProvider} $routeProvider
 */
academy.routes = function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/'});
};

academy.module.config(academy.routes);
