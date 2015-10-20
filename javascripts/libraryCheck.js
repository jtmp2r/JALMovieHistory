define(function(require) {
  var _ = require("lodash"),
  		q = require("q"),
  		firebase = require('firebase'),
  		library = require('library');

  		var ref = new Firebase("https://jal-movie-history.firebaseio.com/");
  		var currentUID;


return {

 	check: function(searchData){

 		currentUID = library.getUID();

 		console.log(currentUID);

  	ref.child('Users/'+currentUID+'/library/').orderByChild('Title').on("value", function(snapshot){

      var userMovies = snapshot.val();


      console.log('We have userMovies');
      console.log(userMovies);
      console.log("and we have searchData");
      console.log(searchData);

      return searchData;

    });// end  firebase

	} //end check
} //end return


}); //end define