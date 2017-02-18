app.controller('ScholarshipsController', ['$scope', '$stateParams', 'ScholarshipService',
  function($scope, $stateParams, ScholarshipService) {
    this.showNav = false;
    $scope.$parent.title = 'Search Scholarships';
    $scope.showTopics = function() {
      this.topics = !this.topics;
    };

    ScholarshipService.getOne($stateParams.id)
    .then(function(data) {
      $scope.scholar = data;
      console.log(data);
    })

    $scope.toggle = function() {
      this.showNav= !this.showNav;
    }

      $scope.topic_filters = [
      {"label": "All Locations",
       "value": "all"},
      {"label": "Manila",
       "value": "manila"},
      {"label": "Cebu",
       "value": "cebu"},
      {"label": "Davao",
      "value": "marketing"},
      {"label": "Zamboanga",
       "value": "zamboanga"}
    ]
  }


]);
