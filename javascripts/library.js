define(function(require) {
  var _ = require("lodash"),
  		q = require("q"),
  		firebase = require('firebase'),
      ratings = require('ratings');

    var currentUID;
    var ref = new Firebase("https://jal-movie-history.firebaseio.com/");
    var currentFilter = "all";

  return {


    populate: function(UID) {

      currentUID = UID;
      var filteredMovies = {};

      ref.off("value");
      ref.child('Users/'+currentUID+'/library/').on("value", function(snapshot){


        var userMovies = snapshot.val();

        //filter based on filter status
        if (currentFilter == "watched") {

          userMoviesKeys = _.keys(userMovies);

          userMoviesKeys.forEach(function(key){

            if (userMovies[key].userRating > -1) {
              filteredMovies[key] = userMovies[key];

            }

          });

        userMovies = filteredMovies;

        }

        //filter based on filter status UNWATCHED
        if (currentFilter == "unwatched") {

          userMoviesKeys = _.keys(userMovies);


          userMoviesKeys.forEach(function(key){

            if (userMovies[key].userRating == -1) {
              filteredMovies[key] = userMovies[key];

            }

          });

        userMovies = filteredMovies;
        }


        require(['hbs!../templates/movies'], function(Temp) {
          $("#centerDiv").html(Temp({Movies:userMovies}));

          ratings.showRatings(currentUID);
        });


      }, function (errorObject) {
        console.log("The read failed: " + errorObject.code);
      });

    }, //End populate

    add: function(movieID) {
      console.log('called add with ' + movieID);
      console.log('user id is ' + currentUID);

      $.ajax({
          type: "GET",
          dataType: "json",
          url: "http://www.omdbapi.com/?i=" + movieID + "&plot=short&r=json",
          success: function(movieData){

            ref.child("Users/"+currentUID+"/library/"+movieID).set(movieData);


          },
          error: function() {
              return console.log("error!");
          }

      });//end AJAX


    }, //End add

    remove: function(movieID) {

    }, //End remove


    setFilter: function(filter){
      currentFilter = filter;
    }


	};//end return

}); //end define

