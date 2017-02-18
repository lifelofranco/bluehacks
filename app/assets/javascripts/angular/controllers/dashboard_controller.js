app.controller('DashboardController', ['$scope', 'DemoService', '$state',
  function($scope, DemoService, $state) {
    this.showNav = false;

    $scope.toggle = function() {
      this.showNav= !this.showNav;
    }


    $scope.apply = function() {
      $state.go('.sidebar.subnavbar.apply');
    }
    $scope.scholarships = DemoService.scholarships();
  }


]);
