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

    $scope.apply = function() {
      var data = {
        userId: $scope.user._id,
        scholarshipId: $stateParams.id
      }
      ScholarshipService.applyScholarship(data)
      .then(function(data) {
        // $scope.scholar = data;
        console.log(data);
      })
    }

    $scope.toggle = function() {
      this.showNav= !this.showNav;
    }

      $scope.topic_filters = [
      {"label": "All Locations",
       "value": "all"},
      {"label": "Southeast Asia",
       "value": "southeast-asia"},
      {"label": "United States",
       "value": "united-states"},
      {"label": "Europe",
      "value": "europe"}
    ]
  }


]);
