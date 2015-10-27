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



            //Log Out event handler
            $(document).on('click', '#logOut', function(){
              logOut.logOut();
              });


          });

          require(['hbs!../templates/filter'], function(Temp) {
            $("#filter").html(Temp());

               //filter handlers
              $(document).on('click', '#filter5stars', function(){
                $('button.filterButton').each(function(){ $(this).removeClass('btn-success');});
                $('#filter5stars').addClass('btn-success');
                library.setFilter("5stars");
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
        // Teriq's current changes
         
        $(document).on("change", "#slidIn", function(val) {
          console.log("$(this).val()", $(this).val());
          library.setFilter("5stars", $(this).val());
        });
        

          $("#centerDiv").html("");

          library.populate(currentUID);

        }
});
    } //End LogIn




	};//end return

}); //end define
