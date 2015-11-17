'use strict';

/**
 * @ngdoc overview
 * @name githubTestApp
 * @description
 * # githubTestApp
 *
 * Main module of the application.
 */
angular
  .module('githubTestApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'githubSearch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/:keyword/:page/:userName/:repoName', {
        templateUrl: 'views/detail.html',
        controller: 'detailView'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
