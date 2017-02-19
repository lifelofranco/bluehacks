app.controller('DashboardController', ['$scope', 'DemoService', 'ScholarshipService', '$state',
  function($scope, DemoService, ScholarshipService, $state) {
    this.showNav = false;


    $scope.$parent.title = 'Applied Scholarships';

    $scope.toggle = function() {
      this.showNav= !this.showNav;
    }
    $scope.tab = $state.current.name;



    $scope.apply = function() {
      $state.go('.sidebar.subnavbar.apply');
    }
  }


]);
