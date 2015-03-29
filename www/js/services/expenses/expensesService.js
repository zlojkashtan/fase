angular.module('app')

.factory('ExpensesResource', function($cachedResource, API) {
  var dir = '/expenses';
  return $cachedResource('expenses', API.url + dir, { id: '@id' });
})

.factory('ExpensesService', function(ExpensesResource) {
  return {
    query: function() {

    },
  };
});
