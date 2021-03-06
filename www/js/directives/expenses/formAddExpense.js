angular.module('app')

.directive('formAddExpense', function(ExpenseScope) {
  return {
    restrict: 'E',
    scope: {
      onSubmit: '&'
    },
    controller: function($scope) {
      // Defaults
      $scope.expense = {};
      $scope.ExpenseScope = ExpenseScope;

      // Form setters
      $scope.setScope = function(scope) {
        $scope.expense.scope = scope;
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
