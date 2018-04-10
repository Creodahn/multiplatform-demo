import Application from '@ember/application';
import Resolver from 'multiplatform-demo/resolver';
import loadInitializers from 'ember-load-initializers';
import config from 'multiplatform-demo/config/environment';

const App = Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});

loadInitializers(App, config.modulePrefix);

export default App;
