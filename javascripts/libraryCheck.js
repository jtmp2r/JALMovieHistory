define(function(require) {
  var _ = require("lodash"),
  		q = require("q"),
  		firebase = require('firebase'),
      $ = require('jquery'),
  		library = require('library');

  		var ref = new Firebase("https://jal-movie-history.firebaseio.com/");
  		var currentUID;


return {

 	check: function(searchData){

 		currentUID = library.getUID();

  	ref.child('Users/'+currentUID+'/library/').orderByChild('Title').on("value", function(snapshot){

      var userMovies = snapshot.val();
      var allUserMovies = _.keys(userMovies);

      searchData.Search.forEach(function(movie){
        console.log(movie);

        movie.userRating = -2;
        if (allUserMovies.indexOf(movie.imdbID) !== -1) {
          movie.userRating = userMovies[movie.imdbID].userRating;
        }


      }); //end forEach

      return searchData;

    });// end  firebase

	} //end check
} //end return


}); //end define
