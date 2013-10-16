define("appkit/tests/unit/routes/index_test",
  ["appkit/routes/index","appkit/app"],
  function(Index, App) {
    "use strict";

    var route;

    module("Unit - IndexRoute", {
      setup: function(){
        route = App.__container__.lookup('route:index');
      }
    });

    test("it exists", function(){
      ok(route);
      ok(route instanceof Ember.Route);
    });

    test("#model", function(){
      deepEqual(route.model(), ['red', 'yellow', 'blue']);
    });

  });