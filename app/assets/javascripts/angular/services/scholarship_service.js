app.service('ScholarshipService', ["$q", "$http",
  function($q, $http){

    this.getScholarships = function() {
        var d = $q.defer();

        $http({
          method: 'GET',
          url: 'https://playtest-api.herokuapp.com/api/v1/scholarships'
        }).success(function(data){
          d.resolve(data);
        });

        return d.promise;
      }

  this.getOne = function (scholarship_id) {
    var d = $q.defer();

    $http({
      method: 'GET',
      url: 'https://playtest-api.herokuapp.com/api/v1/scholarships/' + scholarship_id
    }).success(function(data){
      d.resolve(data);
    });

    return d.promise;
  }
  


}]);
