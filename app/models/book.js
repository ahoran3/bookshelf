import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  author: DS.attr(),
  starred: DS.attr(),
  image: DS.attr()
});