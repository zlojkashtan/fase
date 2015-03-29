angular.module('app')

.factory('ExpensesResource', function($cachedResource, API) {
  var dir = '/expenses/:id';
  return $cachedResource('expenses', API.url + dir, { id: '@id' });
})

.factory('ExpensesService', function(ExpensesResource) {
  return {
    query: function() {
      return ExpensesResource.query().$promise;
    },
  };
});
