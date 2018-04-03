import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.store.findAll('instruction');
  },
  afterModel(resolvedModel, transition) {
    if(['main', 'main.index'].indexOf(transition.targetName) > -1) {
      this.transitionTo('main.home');
    }
  }
});
