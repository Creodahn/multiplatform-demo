import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  splashScreenService: service('ember-cordova/splash'),
  afterModel() {
    this.get('splashScreenService').hide();
  }
});
