var IndexRoute = Ember.Route.extend({
  model: function() {
    return ['EmberJS', 'AngularJS', 'BackboneJS'];
  }
});

export default IndexRoute;
