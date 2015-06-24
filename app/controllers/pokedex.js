import Ember from 'ember';

export default Ember.Controller.extend({
  actions:{
    pokedexEntry: function(resourceUri) {
      var pathArray = resourceUri.split('/');
      var pkmnID = pathArray[pathArray.length - 2];
      this.transitionToRoute('pokemon', pkmnID)
    }
  }
});
