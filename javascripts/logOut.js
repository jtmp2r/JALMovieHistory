define(function(require) {
  var _ = require("lodash"),
  		q = require("q"),
  		firebase = require('firebase'),
      library = require('library'),
      search = require('search'),
      register = require('register');


    var ref = new Firebase("https://jal-movie-history.firebaseio.com/");

  return {

  	logOut: function() {
        ref.unauth();

        $("#mainNav").html("");
        $("#filter").html("");
        $("#movies").html("");
        $("#lightbox").html("");


          $("#splashNav").show();

          //populate Splash
          require(['hbs!../templates/splash'], function(Temp) {
            $("#centerDiv").html(Temp());

          }); //end populate splash

        //////////////////////////////////////////

    } //end Log Out



	};//end return

}); //end define

