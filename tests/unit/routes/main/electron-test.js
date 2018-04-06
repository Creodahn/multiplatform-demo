import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | main/electron', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const route = this.owner.lookup('route:main/electron');

    assert.ok(route);
  });
});
