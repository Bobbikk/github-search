'use strict';

/**
 * @ngdoc function
 * @name githubTestApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the githubTestApp
 */
angular.module('githubTestApp')
  .controller('detailView', [ '$scope', '$routeParams', 'Repository', 'Details', 'Readme', '$rootScope', function ($scope, $routeParams, Repository, Details, Readme, $rootScope) {
    $scope.repoName = $routeParams.repoName;
   	$scope.userName = $routeParams.userName;
   	$rootScope.keyword = $routeParams.keyword;
   	$rootScope.page = $routeParams.page;
    $scope.init = function(repo, user){
		$scope.repositories = Details.query({repo: repo, user: user});
		$scope.readme = Readme.query({repo: repo, user: user});
	}
	$scope.init($scope.repoName, $scope.userName);
  }])
