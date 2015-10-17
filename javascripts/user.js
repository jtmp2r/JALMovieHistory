define(function(require) {
  var _ = require("lodash"),
  		q = require("q"),
  		firebase = require('firebase'),
      library = require('library');

  	var currentUID;

  return {


    logIn: function() {

      var userEmail     = $("#emailLogIn").val();
      var userPassword  = $("#passwordLogIn").val();

      var ref = new Firebase("https://jal-movie-history.firebaseio.com/");
      ref.authWithPassword({
        email     : userEmail,
        password  : userPassword
      }, function(error, authData) {
        if (error) {
          console.log("Login Failed!", error);
        } else {
          console.log("Authenticated successfully with payload:", authData);

          currentUID = authData.uid;

          $("#splashNav").html("");

          require(['hbs!../templates/mainNav'], function(Temp) {
            $("#mainNav").html(Temp());
          });

          require(['hbs!../templates/filter'], function(Temp) {
            $("#filter").html(Temp());
          });

          $("#centerDiv").html("");

          library.populate(currentUID);

        }
});
    }, //End LogIn

    setUID: function(newUID) {
    	currentUID = newUID;
    }, //END setUID

    getUID: function() {
    	return currentUID;
    } //end getUID

	};//end return

}); //end define
