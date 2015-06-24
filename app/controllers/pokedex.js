import Ember from 'ember';

export default Ember.Controller.extend({
  actions:{
    pokedexEntry: function(resourceUri) {
      this.transitionToRoute('pokemon', pkmnID)
    }
  }
});
