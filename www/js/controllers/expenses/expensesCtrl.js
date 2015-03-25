angular.module('app')

.controller('ExpensesCtrl', function($scope, $filter, ExpenseType, ExpensesService) {

  // Defaults
  $scope.expenses = [];
  $scope.filteredExpenses = [];

  // Determine height of list item
  $scope.getItemHeight = function(expense) {
    if (expense && expense.description) {
      return 75;
    }
    return 55;
  };

  $scope.filterExpenses = function(type) {
    $scope.type = type;
    if (type) {
      $scope.filteredExpenses = $filter('filter')($scope.expenses, { type: $scope.type });
    } else {
      $scope.filteredExpenses = $scope.expenses;
    }
  };

  $scope.removeExpense = function(expense) {
    console.log(expense);
  };

  // Load expenses when entering view
  $scope.$on('$ionicView.enter', function() {
    $scope.expenses = ExpensesService.query();
    $scope.filterExpenses(ExpenseType.personal);
  });

});
