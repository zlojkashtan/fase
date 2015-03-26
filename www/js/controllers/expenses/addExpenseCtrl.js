angular.module('app')

.controller('AddExpenseCtrl', function($scope) {

  $scope.addExpense = function(expense) {
    console.log("Adding expense");
    console.log(expense);
  };

  // Clear form when entering view
  $scope.$on('$ionicView.afterLeave', function() {
    $scope.$broadcast('formAddExpense:clear');
  });

});
