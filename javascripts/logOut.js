define(function(require) {
  var _ = require("lodash"),
  		q = require("q"),
  		firebase = require('firebase'),
      library = require('library'),
      search = require('search'),
      user= require('user'),
      register = require('register');


    var ref = new Firebase("https://jal-movie-history.firebaseio.com/");

  return {

  	logOut: function() {
        ref.unauth();

        $("#mainNav").html("");
        $("#filter").html("");
        $("#movies").html("");
        $("#lightbox").html("");

        //////////////////////////////////////////////////////
          //Populate  splashNav
          require(['hbs!../templates/splashNav'], function(Temp) {
            $("#splashNav").html(Temp());

            //Event Handlers for Navigation Links
            //LogIn Form
            $(document).on('click', '#logInLink', function(){

              require(['hbs!../templates/logIn'], function(Temp) {
                $("#centerDiv").html(Temp());

               $(document).on('click', '#submitLogIn', function(e){

                e.preventDefault();
                user.logIn();

              });

              });


            }); //end logIn Handler

            //Register Form
            $(document).on('click', '#registerLink', function(){

              require(['hbs!../templates/register'], function(Temp) {
                $("#centerDiv").html(Temp());
              });

              //event handler for log in form
              $(document).on('click', '#submitRegister', function(e){

                e.preventDefault();
                register.newUser();

              });

            }); //end logIn Handler

          }); //end populate splashNav

          //populate Splash
          require(['hbs!../templates/splash'], function(Temp) {
            $("#centerDiv").html(Temp());

          }); //end populate splash

        //////////////////////////////////////////

    } //end Log Out



	};//end return

}); //end define

