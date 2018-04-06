import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  serializeAttribute(snapshot, json, key, attribute) {
    if(!attribute.options.readOnly) {
      this._super(snapshot, json, key, attribute);
    }
  },
  serializeBelongsTo(snapshot, json, relationship) {
    if(!relationship.options.readOnly) {
      this._super(snapshot, json, relationship);
    }
  },
  serializeHasMany(snapshot, json, relationship) {
    if(!relationship.options.readOnly) {
      this._super(snapshot, json, relationship);
    }
  }
});
