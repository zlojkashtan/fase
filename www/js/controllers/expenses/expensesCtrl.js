angular.module('app')

.controller('ExpensesCtrl', function($scope, $filter, $ionicActionSheet, ExpenseScope, ExpensesService) {

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

  $scope.filterExpenses = function(scope) {
    $scope.scope = scope;
    if (scope) {
      $scope.filteredExpenses = $filter('filter')($scope.expenses, { scope: $scope.scope });
    } else {
      $scope.filteredExpenses = $scope.expenses;
    }
  };

  $scope.swipeLeft = function() {
    if (filter + 1 < filters.length) {
      $scope.scope = filters[++filter];
      $scope.filterExpenses($scope.scope);
    }
  };

  $scope.swipeRight = function() {
    if (filter > 0) {
      $scope.scope = filters[--filter];
      $scope.filterExpenses($scope.scope);
    }
  };

  $scope.displayOptions = function(expense) {
    if (expense.type == ExpenseScope.personal) {
      var hideOptions = $ionicActionSheet.show({
        buttons: [],
        cancelText: 'Cancel',
        destructiveText: 'Delete',
        destructiveButtonClicked: function() {
          hideOptions();
        },
      });
    }
  };

  // Load expenses when entering view
  $scope.$on('$ionicView.enter', function() {
    ExpensesService.query()
      .then(function(res) {
        $scope.expenses = res;
        $scope.filterExpenses(ExpenseScope.personal);
      });
  });

});
