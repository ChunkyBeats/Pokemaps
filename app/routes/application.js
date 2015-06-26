import Ember from 'ember';

export default Ember.Route.extend({

  model: function() {
    var image = "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/004.png";

    return this.store.find('pokemon');
  }
});
