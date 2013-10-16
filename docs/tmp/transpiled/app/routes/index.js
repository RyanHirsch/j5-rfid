define("appkit/routes/index",
  [],
  function() {
    "use strict";
    var IndexRoute = Ember.Route.extend({
      model: function() {
        return ['EmberJS', 'AngularJS', 'BackboneJS'];
      }
    });


    return IndexRoute;
  });