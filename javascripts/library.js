define(function(require) {
  var _ = require("lodash"),
  		q = require("q"),
  		firebase = require('firebase');

    var currentUID;

  return {


    populate: function(UID) {

      currentUID = UID;

    }, //End populate

    add: function(movieID) {
      console.log('called add with ' + movieID);
      console.log('user id is ' + currentUID);



    }, //End add

    remove: function(movieID) {

    }, //End remove

    edit: function(movieID) {

    } //End edit


	};//end return

}); //end define

