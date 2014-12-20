goog.provide('academy.signup.SignupCtrl');
goog.provide('academy.signup.module');
goog.provide('academy.signup.routes');

academy.signup.module = angular.module('AcademyApp.signup', ['ngRoute']);

/**
 * @ngInject
 * @param  {angular.$routeProvider} $routeProvider
 */
academy.signup.routes = function($routeProvider) {
  $routeProvider.when('/signup', {
    templateUrl: 'signup/signup.html',
    controller: academy.signup.SignupCtrl,
    controllerAs: 'SignupCtrl'
  });
};
academy.signup.module.config(academy.signup.routes);

/**
 * @ngInject
 */
academy.signup.SignupCtrl = function() {

};
