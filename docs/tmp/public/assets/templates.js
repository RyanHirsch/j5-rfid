Ember.TEMPLATES["application"] = Ember.Handlebars.compile("<h2>Welcome to Ember.js</h2>\n\n{{outlet}}\n");

Ember.TEMPLATES["index"] = Ember.Handlebars.compile("<ul>\n{{#each}}\n  <li>{{this}}</li>\n{{/each}}\n</ul>\n");