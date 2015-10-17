define(function(require) {
  var _ = require("lodash"),
  		q = require("q"),
  		firebase = require('firebase');


  return {


    newUser: function() {

      var ref = new Firebase("https://jal-movie-history.firebaseio.com/");
      ref.createUser({
        email     : $("#emailRegister").val,
        password  : $("passwordRegister").val
      },function(error, userData) {
        if (error) {
          console.log("Error creating user:", error);
        } else {
          console.log("Successfully created user account with uid:", userData.uid);

        $("#centerDiv").html(Temp());

        }
      }); //End userData fxn



    } //End newUser


	};//end return

}); //end define
