import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | main/ember-web', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const route = this.owner.lookup('route:main/ember-web');

    assert.ok(route);
  });
});
