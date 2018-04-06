import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { run } from '@ember/runloop';

module('Unit | Serializer | application', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    const store = this.owner.lookup('service:store'),
          serializer = store.serializerFor('application');

    assert.ok(serializer);
  });

  test('it serializes records', function(assert) {
    const store = this.owner.lookup('service:store'),
          record = run(() => store.createRecord('application', {})),
          serializedRecord = record.serialize();

    assert.ok(serializedRecord);
  });
});
