import Ember from 'ember';

export default Ember.Route.extend({
  needs: ['pokemon'],
  model: function() {
    return this.store.find('pokemon');
  }
});
