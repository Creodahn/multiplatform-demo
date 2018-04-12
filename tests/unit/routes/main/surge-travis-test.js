import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | main/surge-travis', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    const route = this.owner.lookup('route:main/surge-travis');

    assert.ok(route);
  });
});
