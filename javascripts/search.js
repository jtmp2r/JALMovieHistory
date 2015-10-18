define(function(require) {
  var _ = require("lodash"),
  		q = require("q"),
  		firebase = require('firebase'),
  		library = require('library'),
      ratings = require('ratings');


 var ref = new Firebase("https://jal-movie-history.firebaseio.com/");

  return {


    search: function() {

    	var searchString = $('#searchInput').val().split(" ").join("+");

	    $.ajax({
	        type: "GET",
	        dataType: "json",
	        url: "http://www.omdbapi.com/?s=" + searchString + "&y=&plot=short&r=json",
	        success: function(searchData){

	          require(['hbs!../templates/searchResult'], function(Temp) {

              $("#searchResult").html(Temp(searchData));

              $(document).on('click', '.addMovie', function(e){
              	console.log($(this));
              	movieID = $(this).attr('id');
                library.add(movieID);

              });

            });


	        },
	        error: function() {
	            return "Image not found.";
	        }

	    });//end AJAX

    }, //End search

    find: function() {

      var findString = $('#findInput').val();
      currentUID = library.getUID();

      ref.child('Users/'+currentUID+'/library/').orderByChild("Title").equalTo(findString).on("value", function(snapshot) {

          var findResult= snapshot.val();

          require(['hbs!../templates/movies'], function(Temp) {
          $("#findResult").html(Temp({Movies: findResult}));

          });

          ratings.showRatings(currentUID);

      });




    } //End find



	};//end return

}); //end define