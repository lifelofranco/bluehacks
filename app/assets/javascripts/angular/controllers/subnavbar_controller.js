app.controller('SubNavbarController',
  function($scope, $state, DemoService, ScholarshipService) {


        ScholarshipService.getScholarships()
        .then(function(data) {
          $scope.scholarships = data;
          console.log($scope.scholarships);

        })
    //$scope.scholarships = DemoService.scholarships();

      $scope.tab = $state.current.name;

      $scope.$watch('title', function() {
        if($state.current.name==='sidebar.subnavbar.dashboard' || $state.current.name==='main.subnavbar.comparative') {
          $scope.navbarOptions = [{"label": 'Applied Scholarships', 'link':'dashboard' }]
                                //  {"label": 'Comparative Analytics', 'link':'comparative'}]
        }
        else if($state.current.name==='sidebar.subnavbar.scholarships') {
          $scope.navbarOptions = [{"label": 'Search for Scholarships', 'link':'engagement' }
                                  ]
          }
        else if($state.current.name==='main.subnavbar.settings') {
          $scope.navbarOptions = [{"label": 'Account Settings', 'link':'settings' }
                                  ]
          }
      });

});
