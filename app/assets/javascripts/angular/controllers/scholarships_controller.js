app.controller('ScholarshipsController', ['$scope', '$stateParams', 'ScholarshipService',
  function($scope, $stateParams, ScholarshipService) {
    $scope.hello = "Hello";
    $scope.pdf_source = "";

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

      $scope.tempFileName = $scope.institution + "/" +
        $scope.scholarship + "/" + $scope.id + "/";
      $scope.tempNames = [$scope.tempFileName.concat("ApplicationForm.pdf"),
    $scope.tempFileName.concat("PersonalEssay.pdf"), $scope.tempFileName.concat("AcknowledgmentSlip.pdf"),
  $scope.tempFileName.concat("1x1Picture.jpg"), $scope.tempFileName.concat("Scholarship.pdf")];

      for (var x = 0; x < $scope.tempNames.length; x++) {
        var name = "http://localhost:8081/forms/" + $scope.tempNames[x];
        $.get(name).done(function() {
          fileLink[x] = name;
          console.log(fileLink[x]);
          console.log("Found!!!");
        }).fail(function() {
          console.log("Can't find");
        })
      }
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
      $scope.fileLink[i] = $scope.institution + "/" +
        $scope.scholarship + "/" + $scope.id + "/" + $scope.title;

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
              //url: "https://playtest-api.herokuapp.com/api/v1/forms/upload",
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
