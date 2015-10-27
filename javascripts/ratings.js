define(function(require) {
  var _ = require("lodash"),
  		q = require("q"),
  		firebase = require('firebase');

  		var currentUID;
  		var ref = new Firebase("https://jal-movie-history.firebaseio.com/");

  		return {

  			showRatings: function(UID) {

          currentUID = UID;
          console.log('show ratings called using', UID);
          $('div.userRating').each(function(){

            var thisMovieRating = $(this).attr('rating');
            var thisMovieID = $(this).attr('imdbID');

            if (thisMovieRating == -2) {
              $(this).html('<div class="col-sm-12>"><button type="button" class="btn btn-default addMovie" id="'+thisMovieID+'"+>Add to Watch List</button></div>');
            } else if (thisMovieRating == -1) {
              $(this).html('<p>Not Yet Watched</p> <span class="glyphicon glyphicon-eye-open"></span>');
            } else {
              $(this).html('<p>Rating: ');
              for (i=0; i < thisMovieRating; i++)
              $(this).append('<img src="../styles/images/popcornKernel3.png">');
              $(this).append('</p>');
            }
          });


  			},
        

  			editRating: function(thisMovieID) {

  					console.log('editRating Called on Movie ID: ' + thisMovieID);
  					var newRating = $('#ratingSelector' +thisMovieID).val();


 						ref.child("Users/"+currentUID+"/library/"+thisMovieID+"/userRating").set(newRating);

  			}//end edit rating

  		};//end return

}); //end require
