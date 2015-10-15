requirejs.config({
  baseUrl: './javascripts',
  paths: {
    'jquery': '../lib/bower_components/jquery/dist/jquery.min',
    'lodash': '../lib/bower_components/lodash/lodash.min',
    'hbs': '../lib/bower_components/require-handlebars-plugin/hbs',
    'bootstrap': '../lib/bower_components/bootstrap/dist/js/bootstrap.min',
    'q': '../lib/bower_components/q/q',
    'firebase': '../lib/bower_components/firebase/firebase'
  },
  shim: {
    'bootstrap': ['jquery']
  }
});

requirejs(
  ["jquery", "hbs", "bootstrap", "q", "firebase"],
  function($, Handlebars, bootstrap, q, firebase) {


   // populate generic header template
    require(['hbs!../templates/filter'], function(Temp) {
      $("#filter").html(Temp());
    });

    require(['hbs!../templates/lightbox'], function(Temp) {
      $("#lightbox").html(Temp());
    });

    require(['hbs!../templates/logIn'], function(Temp) {
      $("#logIn").html(Temp());
    });

    require(['hbs!../templates/mainNav'], function(Temp) {
      $("#mainNav").html(Temp());
    });

    require(['hbs!../templates/movies'], function(Temp) {
      $("#movies").html(Temp());
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
