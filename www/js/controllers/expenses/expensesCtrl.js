angular.module('app')

.controller('ExpensesCtrl', function($scope, $filter, $ionicActionSheet, $ionicSlideBoxDelegate, ExpenseScope, ExpensesService) {

  // Defaults
  $scope.expenses = [];
  $scope.personalExpenses = [];
  $scope.collectiveExpenses = [];
  $scope.currentTab = 0;

  function filterExpenses(scope) {
    return $filter('filter')($scope.expenses, { scope: scope });
  }

  // Determine height of list item
  $scope.getItemHeight = function(expense) {
    if (expense && expense.description) {
      return 75;
    }
    return 55;
  };

  $scope.updateTab = function(index) {
    $scope.currentTab = index;
  };

  $scope.switchTab = function(index) {
    $ionicSlideBoxDelegate.slide(index);
  };

  $scope.displayOptions = function(expense) {
    var hideOptions = $ionicActionSheet.show({
      buttons: [],
      cancelText: 'Cancel',
      destructiveText: 'Delete',
      destructiveButtonClicked: function() {
        hideOptions();
      },
    });
  };

  // Load expenses when entering view
  $scope.$on('$ionicView.enter', function() {
    ExpensesService.query()
      .then(function(res) {
        $scope.expenses = res;
        $scope.personalExpenses = filterExpenses(ExpenseScope.personal);
        $scope.collectiveExpenses = filterExpenses(ExpenseScope.collective);
      });
  });

});
