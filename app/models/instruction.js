import DS from 'ember-data';

export default DS.Model.extend({
  intro: DS.attr('string'),
  steps: DS.attr(),
  title: DS.attr('string')
});
