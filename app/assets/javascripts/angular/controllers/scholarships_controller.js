app.controller('ScholarshipsController', ['$scope', '$stateParams', 'ScholarshipService',
  function($scope, $stateParams, ScholarshipService) {
    $scope.hello = "Hello";
    $scope.pdf_source = "";

    $scope.fileLink = ["", "", "", "", ""];

    $scope.isUploaded = [false, false, false, false, false];

    $scope.institution = "Ateneo de Manila".replace(/\s+/g, '');
    $scope.scholarship = "Financial Aid".replace(/\s+/g, '');
    $scope.id = "122888";
    $scope.title = "Application Form";
    $scope.title = $scope.title.replace(/\s+/g, '') + ".pdf";


    //get the institution
    //get the scholarship
    //get the ID
    //get the title - userID + strip spaces + .PDF
    ///forms/institution/scholarship/ID
    //"http://localhost:8180/forms/" +

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

  $scope.setFile = function(element) {
    console.log(element.id);

    var i = 0;

      switch(element.id) {
        case 'file-upload1':
           i = 0;
           break;
        case 'file-upload2':
          i = 0;
          break;
        case 'file-upload3':
          i = 0;
          break;
        case 'file-upload4':
          i = 0;
          break;
        case 'file-upload5':
          i = 0;
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
              url: "http://localhost:8180/api/v1/forms/upload",
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
        url: "http://localhost:8180/api/v1/forms/upload",
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
