app.controller('ScholarshipsController', ['$scope', '$stateParams', 'ScholarshipService', '$state', 'AuthService',
  function($scope, $stateParams, ScholarshipService, $state, AuthService) {
    $scope.hello = "Hello";
    $scope.pdf_source = "";

    $scope.process = "Apply";

    $scope.fileLink = ["", "", "", "", ""];

    $scope.isUploaded = [false, false, false, false, false];
    //for each, check if file exists

    $scope.id = $scope.user._id;

    ScholarshipService.getOne($stateParams.id)
    .then(function(data) {
      $scope.scholar = data;
      $scope.institution = data.institution;
      $scope.scholarship = data.name.replace(/\s+/g, '');
      $scope.institution = $scope.institution.replace(/\s+/g, '');
      console.log($scope.institution);
    })



    //this is pretty null
    $scope.title = "Application Form";
    $scope.title = $scope.title.replace(/\s+/g, '') + ".pdf";


    //get the institution
    //get the scholarship
    //get the ID
    //get the title - userID + strip spaces + .PDF
    ///forms/institution/scholarship/ID
    //"https://playtest-api.herokuapp.com/forms/" +

    this.showNav = false;
    $scope.$parent.title = 'Search Scholarships';
    $scope.showTopics = function() {
      this.topics = !this.topics;
    };

    ScholarshipService.getOne($stateParams.id)
    .then(function(data) {
      $scope.scholar = data;
      console.log(data);

      AuthService.updateUser($scope.user._id)
      .then(function (d) {
        console.log(d);
        _.each(d.applications, function (a) {
          console.log(a);
          if (a.scholarship.scholarshipId === $scope.scholar._id) {
            $scope.process = a.status;
          }
          if ($scope.process == 'Pending') {
            console.log($scope.process)
            $scope.checkDisable = true;
          }
        })
      })



    })

    // ScholarshipService.getApplications($scope.user_id)
    // .then(function(data) {
    //   $scope.scholar = data;
    //   console.log(data);
    //
    // })



    $scope.apply = function() {
      var data = {
        userId: $scope.user._id,
        scholarshipId: $stateParams.id
      }
      ScholarshipService.applyScholarship(data)
      .then(function(data) {
        // $scope.scholar = data;
        console.log(data);
        $state.go('sidebar.subnavbar.dashboard')
      })
    }

    $scope.toggle = function() {
      this.showNav= !this.showNav;
    }

      $scope.topic_filters = [
      {"label": "All Locations",
       "value": "all"},
      {"label": "Japan",
       "value": "Japan"},
      {"label": "Thailand",
       "value": "Thailand"},
      {"label": "United States",
      "value": "United States"},
      {"label": "Philippines",
      "value": "Philippines"}
    ]

    $scope.topicFilter = function(country) {
    filtered_cards = []
    console.log(all_cards)
    _.each(all_cards, function(e, i, l) {
      ifFound = _.contains(e.country, country);
      if(ifFound) {
        filtered_cards.push(e);
      }
      else if(country == 'all') {
        filtered_cards = all_cards
      }
    });
    $scope.scholarships = filtered_cards
  }

  ScholarshipService.getScholarships()
  .then(function(data) {
    $scope.scholarships = data;
    all_cards = data;
    console.log($scope.scholarships);

  })

  $scope.setFile = function(element) {
    console.log(element.id);

    var i = 0;

      switch(element.id) {
        case 'file-upload1':
           i = 0;
           $scope.title = "ApplicationForm.pdf";
           break;
        case 'file-upload2':
          i = 0;
          $scope.title = "PersonalEssay.pdf";
          break;
        case 'file-upload3':
          i = 0;
          $scope.title = "AcknowledgmentSlip.pdf";
          break;
        case 'file-upload4':
          i = 0;
          $scope.title = "1x1Picture.jpg";
          break;
        case 'file-upload5':
          i = 0;
          $scope.title = "ScholarshipForm.pdf";
          break;
      }
      ScholarshipService.getOne($stateParams.id)
      .then(function(data) {
        $scope.scholar = data;
        console.log(data);

        $scope.scholar = data;
        $scope.institution = data.institution;
        $scope.scholarship = data.name.replace(/\s+/g, '');
        $scope.institution = $scope.institution.replace(/\s+/g, '');
        console.log($scope.institution);

        $scope.fileLink[i] = $scope.institution + "/" +
          $scope.scholarship + "/" + $scope.id + "/" + $scope.title;
      })


      var reader = new FileReader();

      reader.onload = function(event) {
          $scope.pdf_source = event.target.result;
          $scope.$apply();

          //sending the pdf
          var pdfObject = {
            content: $scope.pdf_source,
            filePath: $scope.fileLink[i]
          }

          console.log("About to post");
          console.log($scope.fileLink[i]);

          $.ajax({
              type: "POST",
              url: "https://playtest-api.herokuapp.com/api/v1/forms/upload",
              data: pdfObject,
              success: function(data) {
                  console.log("Doc sent successfully");
                  $scope.isUploaded = true;
              },
          /*    error: function(data) {
                  console.log("Photo not sent");
              }*/
              error: function (xhr, ajaxOptions, thrownError) {
              console.log("Not saved");
               console.log(xhr.status);
               console.log(xhr.responseText);
               console.log(thrownError);
             }
         });

         console.log($scope.isUploaded);

//           $scope.isUploaded = isUploaded;
      }

      reader.readAsDataURL(element.files[0]);
    }


  $scope.submit = function(){

    //sending the pdf
    var pdfObject = {
      content: $scope.pdf_source
    }

    console.log("About to post");
    console.log($scope.pdf_source);

    $.ajax({
        type: "POST",
//        url: "https://playtest-api.herokuapp.com/api/v1/forms/upload",
        url: "https://playtest-api.herokuapp.com/api/v1/forms/upload",
        data: pdfObject,
        success: function(data) {
            console.log("Photo sent successfully");
        },
    /*    error: function(data) {
            console.log("Photo not sent");
        }*/
        error: function (xhr, ajaxOptions, thrownError) {
        console.log("Not saved");
         console.log(xhr.status);
         console.log(xhr.responseText);
         console.log(thrownError);
       }
   });
  }
}

]);
