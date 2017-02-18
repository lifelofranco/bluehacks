app.controller('ScholarshipsController', ['$scope',
  function($scope) {
    this.showNav = false;
    $scope.$parent.title = 'Search Scholarships';
    $scope.showTopics = function() {
      this.topics = !this.topics;
    };

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
