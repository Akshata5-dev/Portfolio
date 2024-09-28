angular.module('myApp')
  .controller('NavController', function($scope) {
    $scope.activeSection = 'home';

    $scope.isActive = function(section) {
      return $scope.activeSection === section;
    };

    $scope.setActive = function(section) {
      $scope.activeSection = section;
    };
});
