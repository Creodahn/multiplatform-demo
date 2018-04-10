import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('main', { path: '/' }, function() {
    this.route('home');
    this.route('corber');
    this.route('electron');
    this.route('ember-web');
    this.route('architecture');
  });
});

export default Router;
