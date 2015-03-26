angular.module('app')

.directive('formAddExpense', function(ExpenseType) {
  return {
    restrict: 'E',
    scope: {
      onSubmit: '&'
    },
    controller: function($scope) {
      // Defaults
      $scope.expense = {};
      $scope.ExpenseType = ExpenseType;

      // Form validators
      $scope.validateType = function() {
        if ($scope.expense.type) {
          return true;
        }
        return false;
      };

      // Form setters
      $scope.setType = function(type) {
        $scope.expense.type = type;
      };
    },
    link: function($scope) {
      $scope.submit = function() {
        if ($scope.formAddExpense.$valid) {
          $scope.onSubmit({ expense: $scope.expense });
        }
      };

      $scope.$on('formAddExpense:clear', function() {
        $scope.expense = {};
        $scope.formAddExpense.$setPristine();
      });
    },
    templateUrl: 'templates/expenses/directives/formAddExpense.html'
  };
});
