import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    toggleStar() {
      this.set('starred', true);
    }
  }
});
