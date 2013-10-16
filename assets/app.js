define("appkit/app",
  ["resolver","appkit/routes"],
  function(Resolver, routes) {
    "use strict";

    var App = Ember.Application.create({
      LOG_ACTIVE_GENERATION: true,
      LOG_VIEW_LOOKUPS: true,
      modulePrefix: 'appkit', // TODO: loaded via config
      Resolver: Resolver
    });

    App.Router.map(routes); // TODO: just resolve the router


    return App;
  });
define("appkit/routes",
  [],
  function() {
    "use strict";
    function Routes() {
      // // routes/resources
      // this.resource('posts', function() {
      //   this.route('new');
      // });
    }


    return Routes;
  });
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
//@ sourceMappingURL=app.js.map