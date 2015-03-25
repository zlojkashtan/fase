angular.module('app')

.controller('TabsCtrl', function($rootScope, ExpenseType) {
  // Set global constants
  $rootScope.ExpenseType = ExpenseType;
});
