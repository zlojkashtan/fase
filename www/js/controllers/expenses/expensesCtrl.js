angular.module('app')

.controller('ExpensesCtrl', function($scope, $filter, $ionicActionSheet, ExpenseType, ExpensesService) {

  // Defaults
  $scope.expenses = [];
  $scope.filteredExpenses = [];
  var filters = [1, 2, 0];
  var filter = 0;

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

  $scope.swipeLeft = function() {
    if (filter + 1 < filters.length) {
      $scope.type = filters[++filter];
    }
  };

  $scope.swipeRight = function() {
    if (filter > 0) {
      $scope.type = filters[--filter];
    }
  };

  $scope.displayOptions = function(expense) {
    if (expense.type == ExpenseType.personal) {
      $ionicActionSheet.show({
        buttons: [],
        cancelText: 'Cancel',
        destructiveText: 'Delete',
        destructiveButtonClicked: function() {
          console.log("Delete!");
        },
      });
    }
  };

  // Load expenses when entering view
  $scope.$on('$ionicView.enter', function() {
    $scope.expenses = ExpensesService.query();
    $scope.filterExpenses(ExpenseType.personal);
  });

});
