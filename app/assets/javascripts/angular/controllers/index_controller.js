app.controller('IndexController', ['$scope',
  function($scope) {
    this.showNav = false;
    // if($scope.user._id != null)
    //   console.log($scope.user._id);


    $scope.toggle = function() {
      this.showNav= !this.showNav;
    }
  }


]);
