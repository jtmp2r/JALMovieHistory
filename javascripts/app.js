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
  ["jquery", "hbs", "bootstrap", "q", "firebase", "bootstrap-star-rating", "library", "register", "search", "user"],
  function($, Handlebars, bootstrap, q, firebase, bootstrap_star, library, register, search, user) {


   // populate generic header template
    require(['hbs!../templates/filter'], function(Temp) {
      $("#filter").html(Temp());
    });

    require(['hbs!../templates/lightbox'], function(Temp) {
      $("#lightbox").html(Temp());

      require(['hbs!../templates/searchResult'], function(Temp) {
        $("#searchResult").html(Temp(
{"Search":[{"Title":"Harry Potter and the Deathly Hallows: Part 2","Year":"2011","imdbID":"tt1201607","Type":"movie","Poster":"http://ia.media-imdb.com/images/M/MV5BMTY2MTk3MDQ1N15BMl5BanBnXkFtZTcwMzI4NzA2NQ@@._V1_SX300.jpg"},{"Title":"Harry Potter and the Sorcerer's Stone","Year":"2001","imdbID":"tt0241527","Type":"movie","Poster":"http://ia.media-imdb.com/images/M/MV5BMTYwNTM5NDkzNV5BMl5BanBnXkFtZTYwODQ4MzY5._V1_SX300.jpg"},{"Title":"Harry Potter and the Goblet of Fire","Year":"2005","imdbID":"tt0330373","Type":"movie","Poster":"http://ia.media-imdb.com/images/M/MV5BMTI1NDMyMjExOF5BMl5BanBnXkFtZTcwOTc4MjQzMQ@@._V1_SX300.jpg"},{"Title":"Harry Potter and the Chamber of Secrets","Year":"2002","imdbID":"tt0295297","Type":"movie","Poster":"http://ia.media-imdb.com/images/M/MV5BMTcxODgwMDkxNV5BMl5BanBnXkFtZTYwMDk2MDg3._V1_SX300.jpg"},{"Title":"Harry Potter and the Prisoner of Azkaban","Year":"2004","imdbID":"tt0304141","Type":"movie","Poster":"http://ia.media-imdb.com/images/M/MV5BMTY4NTIwODg0N15BMl5BanBnXkFtZTcwOTc0MjEzMw@@._V1_SX300.jpg"},{"Title":"Harry Potter and the Order of the Phoenix","Year":"2007","imdbID":"tt0373889","Type":"movie","Poster":"http://ia.media-imdb.com/images/M/MV5BMTM0NTczMTUzOV5BMl5BanBnXkFtZTYwMzIxNTg3._V1_SX300.jpg"},{"Title":"Harry Potter and the Deathly Hallows: Part 1","Year":"2010","imdbID":"tt0926084","Type":"movie","Poster":"http://ia.media-imdb.com/images/M/MV5BMTQ2OTE1Mjk0N15BMl5BanBnXkFtZTcwODE3MDAwNA@@._V1_SX300.jpg"},{"Title":"Harry Potter and the Half-Blood Prince","Year":"2009","imdbID":"tt0417741","Type":"movie","Poster":"http://ia.media-imdb.com/images/M/MV5BNzU3NDg4NTAyNV5BMl5BanBnXkFtZTcwOTg2ODg1Mg@@._V1_SX300.jpg"},{"Title":"Harry Potter and the Chamber of Secrets","Year":"2002","imdbID":"tt0304140","Type":"game","Poster":"http://ia.media-imdb.com/images/M/MV5BNTM4NzQ2NjA4NV5BMl5BanBnXkFtZTgwODAwMjE4MDE@._V1_SX300.jpg"},{"Title":"Harry Potter and the Order of the Phoenix","Year":"2007","imdbID":"tt0944836","Type":"game","Poster":"N/A"}]}));
      });

    });

    require(['hbs!../templates/logIn'], function(Temp) {
      $("#logIn").html(Temp());
    });

    require(['hbs!../templates/mainNav'], function(Temp) {
      $("#mainNav").html(Temp());
    });

    require(['hbs!../templates/movies'], function(Temp) {
      $("#movies").html(Temp(
{"Search":[{"Title":"Harry Potter and the Deathly Hallows: Part 2","Year":"2011","imdbID":"tt1201607","Type":"movie","Poster":"http://ia.media-imdb.com/images/M/MV5BMTY2MTk3MDQ1N15BMl5BanBnXkFtZTcwMzI4NzA2NQ@@._V1_SX300.jpg"},{"Title":"Harry Potter and the Sorcerer's Stone","Year":"2001","imdbID":"tt0241527","Type":"movie","Poster":"http://ia.media-imdb.com/images/M/MV5BMTYwNTM5NDkzNV5BMl5BanBnXkFtZTYwODQ4MzY5._V1_SX300.jpg"},{"Title":"Harry Potter and the Goblet of Fire","Year":"2005","imdbID":"tt0330373","Type":"movie","Poster":"http://ia.media-imdb.com/images/M/MV5BMTI1NDMyMjExOF5BMl5BanBnXkFtZTcwOTc4MjQzMQ@@._V1_SX300.jpg"},{"Title":"Harry Potter and the Chamber of Secrets","Year":"2002","imdbID":"tt0295297","Type":"movie","Poster":"http://ia.media-imdb.com/images/M/MV5BMTcxODgwMDkxNV5BMl5BanBnXkFtZTYwMDk2MDg3._V1_SX300.jpg"},{"Title":"Harry Potter and the Prisoner of Azkaban","Year":"2004","imdbID":"tt0304141","Type":"movie","Poster":"http://ia.media-imdb.com/images/M/MV5BMTY4NTIwODg0N15BMl5BanBnXkFtZTcwOTc0MjEzMw@@._V1_SX300.jpg"},{"Title":"Harry Potter and the Order of the Phoenix","Year":"2007","imdbID":"tt0373889","Type":"movie","Poster":"http://ia.media-imdb.com/images/M/MV5BMTM0NTczMTUzOV5BMl5BanBnXkFtZTYwMzIxNTg3._V1_SX300.jpg"},{"Title":"Harry Potter and the Deathly Hallows: Part 1","Year":"2010","imdbID":"tt0926084","Type":"movie","Poster":"http://ia.media-imdb.com/images/M/MV5BMTQ2OTE1Mjk0N15BMl5BanBnXkFtZTcwODE3MDAwNA@@._V1_SX300.jpg"},{"Title":"Harry Potter and the Half-Blood Prince","Year":"2009","imdbID":"tt0417741","Type":"movie","Poster":"http://ia.media-imdb.com/images/M/MV5BNzU3NDg4NTAyNV5BMl5BanBnXkFtZTcwOTg2ODg1Mg@@._V1_SX300.jpg"},{"Title":"Harry Potter and the Chamber of Secrets","Year":"2002","imdbID":"tt0304140","Type":"game","Poster":"http://ia.media-imdb.com/images/M/MV5BNTM4NzQ2NjA4NV5BMl5BanBnXkFtZTgwODAwMjE4MDE@._V1_SX300.jpg"},{"Title":"Harry Potter and the Order of the Phoenix","Year":"2007","imdbID":"tt0944836","Type":"game","Poster":"N/A"}]}));
    });

    require(['hbs!../templates/register'], function(Temp) {
      $("#register").html(Temp());
    });

    require(['hbs!../templates/splash'], function(Temp) {
      $("#splash").html(Temp());
    });

    require(['hbs!../templates/splashNav'], function(Temp) {
      $("#splashNav").html(Temp());
    });

});
