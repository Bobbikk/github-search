'use strict';

var githubSearch = angular.module('githubSearch', ['ngResource']);

githubSearch.factory('Repository', ['$resource',
	function($resource){
			return $resource('https://api.github.com/search/repositories?q=:term&page=:page', {}, {
				query: {method: 'GET', params: {term: '@keyword', page: '@page' } }
			});
	}]);

githubSearch.factory('Details', ['$resource',
	function($resource){
			return $resource('https://api.github.com/repos/:user/:repo', {}, {
				query: {method: 'GET', params: {user: '@user', repo: '@repo'}}
			});

	}]);

githubSearch.factory('Readme', ['$resource',
	function($resource){
			return $resource('https://api.github.com/repos/:user/:repo/readme', {}, {
				query: {method: 'GET', params: {user: '@user', repo: '@repo'}}
			});
	}]);
