requirejs.config({
  baseUrl: './javascripts',
  paths: {
    'jquery': '../lib/bower_components/jquery/dist/jquery.min',
    'lodash': '../lib/bower_components/lodash/lodash.min',
    'hbs': '../lib/bower_components/require-handlebars-plugin/hbs',
    'bootstrap': '../lib/bower_components/bootstrap/dist/js/bootstrap.min',
    'q': '../lib/bower_components/q/q',
    'firebase': '../lib/bower_components/firebase/firebase',
    'bootstrap-star-rating': '../lib/bower_components/bootstrap-star-rating/js/star-rating.min'
  },
  shim: {
    'bootstrap': ['jquery'],
    'bootstrap-star-rating': ['jquery']
  }
});

requirejs(
  ["jquery", "hbs", "bootstrap", "q", "firebase", "bootstrap-star-rating", "library", "register", "search", "user", "ratings", "reload"],
  function($, Handlebars, bootstrap, q, firebase, bootstrap_star, library, register, search, user, ratings, reload) {


    var ref = new Firebase("https://jal-movie-history.firebaseio.com/");
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


    //event handler for ratings
    $(document).on('click', '.userRating', function(){
      thisMovieID = $(this).attr('imdbID');
      thisCurrentRating = $(this).attr('rating');

      $("#ratingSelector"+thisMovieID).toggle('display');
      $("#ratingButton"+thisMovieID).toggle('display');

    });

        //event handler for ratings
    $(document).on('click', '.userRatingButton', function(){
      ratings.editRating($(this).attr('imdbID'));

      $("#ratingSelector"+thisMovieID).toggle('display');
      $("#ratingButton"+thisMovieID).toggle('display');

      if (reload.getReloadType() == "search"){
        search.searchOMDB();
      } else {
        var UID = library.getUID();
        library.populate(UID);
      };

    });


    //end handler for remove glyphicon-remove" id="remove{{imdbID}}

    $(document).on('click', '.deleteMovieIcon', function(){
      library.deleteMovie($(this).closest('.movieDiv').css("display", "none"));
      console.log("delete movie button clicked");

      if (reload.getReloadType() == "search"){
        search.searchOMDB();
      } else {
        var UID = library.getUID();
       // library.populate(UID);
      };

    });


                //SEARCH Button Event Handler////////


        $(document).on('click', '#searchButton', function(e){
          e.preventDefault();
          search.searchOMDB();

          $('button.filterButton').each(function(){ $(this).removeClass('btn-success');});
        });


          ////ADD MOVIE event handler

      $(document).on('click', '.addMovie', function(e){
          console.log('Movie Added through button',$(this));
          movieID = $(this).attr('id');
          library.add(movieID);

          if (reload.getReloadType() == "search"){
            search.searchOMDB();
          } else {
            var UID = library.getUID();
            library.populate(UID);
          };


      }); // end add movie handler




}); //end require
