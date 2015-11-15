'use strict';

/**
 * @ngdoc function
 * @name githubTestApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the githubTestApp
 */
angular.module('githubTestApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
