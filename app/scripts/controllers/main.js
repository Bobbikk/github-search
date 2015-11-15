'use strict';

/**
 * @ngdoc function
 * @name githubTestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the githubTestApp
 */
angular.module('githubTestApp')
  .controller('MainCtrl',['$scope', 'Repository', function ($scope, Repository) {
		$scope.getRepositories = function(keyword){
		$scope.repositories = Repository.query({term: keyword}); 
	}
  }]);
