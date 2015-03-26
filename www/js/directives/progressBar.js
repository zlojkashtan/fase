angular.module('app')

.directive('progressBar', function() {
  return {
    restrict: 'E',
    scope: {
      img: '@',
      value: '=',
      max: '='
    },
    link: function($scope, $el, $attrs) {
      console.log($scope.img);
      console.log($scope.value);
      console.log($scope.max);

      var completed = angular.element($el[0].querySelector('.progress-bar-completed'));
      var bar = angular.element(completed.parent());
      var width = bar.prop('offsetWidth');

      var completedWidth = width * ($scope.value / $scope.max);
      completed[0].style.width = (completedWidth ? completedWidth : 24) + 'px';
    },
    templateUrl: 'templates/directives/progressBar.html'
  };
});
