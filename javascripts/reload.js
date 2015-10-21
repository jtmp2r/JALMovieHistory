define(function(require) {
  var _ = require("lodash"),
  		q = require("q"),
  		firebase = require('firebase');


    var reloadType; //search or populate

  return {

    setReloadType: function(x) {

        reloadType = x;

    }, //end set

    getReloadType: function() {

      return reloadType;

    } //end set




	};//end return

}); //end define
