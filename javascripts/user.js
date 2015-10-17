define(function(require) {
  var _ = require("lodash"),
  		q = require("q"),
  		firebase = require('firebase');

  	var currentUID;

  return {


    logIn: function() {

    }, //End LogIn

    setUID: function(newUID) {
    	currentUID = newUID;
    }, //END setUID

    getUID: function() {
    	return currentUID;
    } //end getUID

	};//end return

}); //end define
