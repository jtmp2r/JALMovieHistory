define(function(require) {
  var _ = require("lodash"),
  		q = require("q"),
  		firebase = require('firebase');


  return {

      newUser: function() {

      var newUserEmail     = $("#emailRegister").val();
      var newUserPassword  = $("#passwordRegisterCheck").val();

      console.log(newUserEmail);
      console.log(newUserPassword);

      var ref = new Firebase("https://jal-movie-history.firebaseio.com/");

      ref.createUser({
        email     : newUserEmail,
        password  : newUserPassword
      },function(error, userData) {
        if (error) {
          console.log("Error creating user:", error);
        } else {
          alert("Successfully created user account.");


         require(['hbs!../templates/logIn'], function(Temp) {
          $("#centerDiv").html(Temp());

          $(document).on('click', '#submitLogIn', function(e){
              e.preventDefault();
              user.logIn();
          }); //end event handler

        }); //end logIn Form populate require

        } //end else

      } //End userData fxn

    ); //end creatUser

    } //End newUser

	};//end return

}); //end define
