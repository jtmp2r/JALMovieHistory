define(function(require) {
  var _ = require("lodash"),
  		q = require("q"),
  		firebase = require('firebase');

  		var currentUID;
  		var ref = new Firebase("https://jal-movie-history.firebaseio.com/");

  		return {

  			showRatings: function(UID) {

  				currentUID = UID;

  				$('div.userRating').each(function(){

  					var thisMovieRating = $(this).attr('rating');
  					var thisMovieID = $(this).attr('imdbID');

  					if (thisMovieRating == -1) {

  						$(this).html('<p>Not Yet Watched</p> <span class="glyphicon glyphicon-eye-open"></span>');

  					} else {

  						$(this).html('Rating: ');
  						for (i=0; i < thisMovieRating; i++)
  						$(this).append('<img src="../styles/images/popcornKernel3.png">');
  					}

  				});

  			},

  			editRating: function(thisMovieID) {

  					console.log('editRating Called on Movie ID: ' + thisMovieID);
  					var newRating = $('#ratingSelector' +thisMovieID).val();

 						ref.child("Users/"+currentUID+"/library/"+thisMovieID+"/userRating").set(newRating);

  			}

  		};//end return




}); //end require