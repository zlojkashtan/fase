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
      var completed = angular.element($el[0].querySelector('.progress-bar-completed'));
      var bar = angular.element(completed.parent());
      var width = bar.prop('offsetWidth');

      var completedWidth = width * ($scope.value / $scope.max);
      var bounds = 22;
      completed[0].style.width = (completedWidth ? completedWidth : bounds) + 'px';
    },
    templateUrl: 'templates/directives/progressBar.html'
  };
});
