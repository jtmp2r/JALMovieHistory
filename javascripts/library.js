define(function(require) {
  var _ = require("lodash"),
  		q = require("q"),
  		firebase = require('firebase');

    var currentUID;
    var ref = new Firebase("https://jal-movie-history.firebaseio.com/");

  return {


    populate: function(UID) {

      currentUID = UID;

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

    edit: function(movieID) {

    } //End edit


	};//end return

}); //end define

