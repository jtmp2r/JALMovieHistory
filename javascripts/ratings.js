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
  					var newRating = prompt('Please rate this title between 1 and 5');

  					if(newRating == 1 || newRating == 2 || newRating == 3 || newRating == 4 || newRating == 5 || newRating === 0) {
  						ref.child("Users/"+currentUID+"/library/"+thisMovieID+"/userRating").set(newRating);
  					} else alert('Sorry, the rating must be an integer between 0 and 5');

  			}

  		};//end return




}); //end require