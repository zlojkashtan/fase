angular.module('app')

.controller('TabsCtrl', function($rootScope, ExpenseScope) {
  // Set global constants
  $rootScope.ExpenseScope = ExpenseScope;
});
