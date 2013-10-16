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