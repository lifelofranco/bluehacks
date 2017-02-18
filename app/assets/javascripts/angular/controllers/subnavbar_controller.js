app.controller('SubNavbarController',
  function($scope, $state, DemoService) {
      $scope.tab = $state.current.name;

      $scope.$watch('title', function() {
        if($state.current.name==='sidebar.subnavbar.dashboard' || $state.current.name==='main.subnavbar.comparative') {
          $scope.navbarOptions = [{"label": 'Applied Scholarships', 'link':'dashboard' }]
                                //  {"label": 'Comparative Analytics', 'link':'comparative'}]
        }
        else if($state.current.name==='main.subnavbar.engagement') {
          $scope.navbarOptions = [{"label": 'Engagements', 'link':'engagement' }
                                  ]
          }
        else if($state.current.name==='main.subnavbar.settings') {
          $scope.navbarOptions = [{"label": 'Account Settings', 'link':'settings' }
                                  ]
          }
      });

});
