define(function(require) {
  var _ = require("lodash"),
  		q = require("q"),
  		firebase = require('firebase'),
      library = require('library'),
      search = require('search'),
      logOut = require('logOut');

  	var currentUID;
    var ref = new Firebase("https://jal-movie-history.firebaseio.com/");

  return {


    logIn: function() {

      var userEmail     = $("#emailLogIn").val();
      var userPassword  = $("#passwordLogIn").val();


      ref.authWithPassword({
        email     : userEmail,
        password  : userPassword
      }, function(error, authData) {
        if (error) {
          console.log("Login Failed!", error);
        } else {
          console.log("Authenticated successfully with payload:", authData);

          currentUID = authData.uid;

          $("#splashNav").hide();

          require(['hbs!../templates/mainNav'], function(Temp) {
            $("#mainNav").html(Temp());

            //SEARCH Button Event Handler////////
            $(document).on('click', '#search', function(){

              require(['hbs!../templates/lightbox'], function(Temp) {
              $("#lightbox").html(Temp());

                $(document).on('click', '#searchButton', function(e){
                  e.preventDefault();
                  search.search();
                });

                $(document).on('click', '#hideLightbox', function(e){
                  e.preventDefault();
                  $('#lightbox').html("");

                });

              }); //end populate lightbox

            });//end search event handler

            //Log Out event handler
            $(document).on('click', '#logOut', function(){
              logOut.logOut();
              });


          });

          require(['hbs!../templates/filter'], function(Temp) {
            $("#filter").html(Temp());

               //filter handlers
              $(document).on('click', '#filterAll', function(){
                $('button.filterButton').each(function(){ $(this).removeClass('btn-success');});
                $('#filterAll').addClass('btn-success');
                library.setFilter("all");
                library.populate(currentUID);
              });

              $(document).on('click', '#filterWatched', function(){
                $('button.filterButton').each(function(){ $(this).removeClass('btn-success');});
                $('#filterWatched').addClass('btn-success');
                library.setFilter("watched");
                library.populate(currentUID);
              });

              $(document).on('click', '#filterUnwatched', function(){
                $('button.filterButton').each(function(){ $(this).removeClass('btn-success');});
                $('#filterUnwatched').addClass('btn-success');
                library.setFilter("unwatched");
                library.populate(currentUID);
              });



          });

          $("#centerDiv").html("");

          library.populate(currentUID);

        }
});
    } //End LogIn



	};//end return

}); //end define
