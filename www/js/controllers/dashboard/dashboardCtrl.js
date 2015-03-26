angular.module('app')

.controller('DashboardCtrl', function($scope) {

  // Get new data
  $scope.getData = function() {
    // For now, simply timeout
    setTimeout(function() {
      // Stop the ion-refresher from spinning
      $scope.$broadcast('scroll.refreshComplete');
    }, 1500);
  };

});
