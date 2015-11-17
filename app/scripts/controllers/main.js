'use strict';

/**
 * @ngdoc function
 * @name githubTestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the githubTestApp
 */
angular.module('githubTestApp')
  .controller('MainCtrl',['$scope', 'Repository', '$rootScope', function ($scope, Repository, $rootScope) { 	
		$scope.repositories = false;
		$scope.page = 1;
		$scope.nextPage = $scope.page+1;
		$scope.prevPage = $scope.page-1;
		$scope.getRepositories = function(keyword, page){
			$scope.page = page; 
			$scope.repositories = Repository.query({term: keyword, page: page}); 
	}
	if($rootScope.keyword){
			$scope.getRepositories($rootScope.keyword, $rootScope.page);
		}
  }]);
