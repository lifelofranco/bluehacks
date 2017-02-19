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

  this.applyScholarship = function(data) {

    $http.defaults.headers.post["Content-Type"] = "application/json";
    var d = $q.defer();

    $http({
      method: 'POST',
      url: 'https://playtest-api.herokuapp.com/api/v1/application/create',
      data: data
    }).success(function(data){
      d.resolve(data);
    });

    return d.promise;
  }


}]);
