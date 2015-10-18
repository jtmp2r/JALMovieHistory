define(function(require) {
  var _ = require("lodash"),
  		q = require("q"),
  		firebase = require('firebase'),
  		library = require('library');



  return {


    search: function() {

    	var searchString = $('#searchInput').val().split(" ").join("+");
    	console.log(searchString);

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

    } //End search




	};//end return

}); //end define