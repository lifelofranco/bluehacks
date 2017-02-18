app.controller('DashboardController', ['$scope', 'DemoService',
  function($scope, DemoService) {
    this.showNav = false;

    $scope.toggle = function() {
      this.showNav= !this.showNav;
    }

    $scope.scholarships = DemoService.scholarships();
  }


]);
