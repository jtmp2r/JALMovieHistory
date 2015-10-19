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
  ["jquery", "hbs", "bootstrap", "q", "firebase", "bootstrap-star-rating", "library", "register", "search", "user", "ratings"],
  function($, Handlebars, bootstrap, q, firebase, bootstrap_star, library, register, search, user, ratings) {


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
    });


    //end handler for remove glyphicon-remove" id="remove{{imdbID}}

    $(document).on('click', '.deleteMovieIcon', function(){
      library.deleteMovie($(this).attr('imdbID'));
    });


                //SEARCH Button Event Handler////////
    $(document).on('click', 'a#search', function(){

      require(['hbs!../templates/lightbox'], function(Temp) {
      $("#lightbox").html(Temp());

        $(document).on('click', '#searchButton', function(e){
          e.preventDefault();
          search.searchOMDB();
        });

        $(document).on('click', '#hideLightbox', function(e){
          e.preventDefault();
          $('#lightbox').html("");

        });

      }); //end populate lightbox

    });//end search event handler

                    //FIND Button Event Handler////////
    $(document).on('click', 'a#find', function(){

      var currentUID = library.getUID();
      var movies;

      ref.child('Users/'+currentUID+'/library/').orderByChild('Title').once("value", function(snapshot){

      var userMovies = snapshot.val();

      require(['hbs!../templates/findLightbox'], function(Temp) {
      $("#lightbox").html(Temp({Movies:userMovies}));

        $(document).on('click', '#findButton', function(e){
          e.preventDefault();
          search.searchLibrary();
        });

        $(document).on('click', '#hideLightbox', function(e){
          e.preventDefault();
          $('#lightbox').html("");

        });

      }); //end populate lightbox

      });// end snapshot

    });//end find event handler

}); //end require
