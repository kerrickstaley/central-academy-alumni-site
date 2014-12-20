goog.provide('academy.main.MainCtrl');
goog.provide('academy.main.module');
goog.provide('academy.main.routes');

academy.main.module = angular.module('AcademyApp.main', ['ngRoute']);

/**
 * @param  {angular.$routeProvider} $routeProvider
 * @ngInject
 */
academy.main.routes = function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'main/main.html',
    controller: academy.main.MainCtrl,
    controllerAs: 'MainCtrl'
  });
};
academy.main.module.config(academy.main.routes);

/**
 * @ngInject
 */
academy.main.MainCtrl = function() {
};
academy.main.module.controller('MainCtrl', academy.main.MainCtrl);
