app.controller('ScholarshipsController', ['$scope',
  function($scope) {
    this.showNav = false;
    $scope.$parent.title = 'Search Scholarships';


    $scope.toggle = function() {
      this.showNav= !this.showNav;
    }
  }


]);
