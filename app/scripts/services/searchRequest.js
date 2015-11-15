'use strict';

var githubSearch = angular.module('githubSearch', ['ngResource']);

githubSearch.factory('Repository', ['$resource',
	function($resource){
			return $resource('https://api.github.com/search/repositories?q=:term', {}, {
				query: {method: 'GET', params: {term: '@keyword' } }
			});
	}]);