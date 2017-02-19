app.controller('DashboardController', ['$scope', 'DemoService', 'ScholarshipService', '$state', 'AuthService', '$cookies', '$window',
  function($scope, DemoService, ScholarshipService, $state, AuthService, $cookies, $window) {
    this.showNav = false;


    $scope.$parent.title = 'Applied Scholarships';

    $scope.toggle = function() {
      this.showNav= !this.showNav;
    }
    $scope.tab = $state.current.name;


    $scope.logout = function() {
        $cookies.remove("token");
        $window.location.href="/";
    };


    AuthService.updateUser($scope.user._id)
    .then(function (d) {
      console.log(d);
      $scope.myScholarships = d;
    })


    $scope.apply = function() {
      $state.go('.sidebar.subnavbar.apply');
    }
  }


]);
