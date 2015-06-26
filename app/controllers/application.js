import Ember from 'ember';

export default Ember.Controller.extend({
  centerLat: 45.521934,
  centerLng: -122.675843,

  actions: {
    submit: function() {
      var newPokemon = this.store.createRecord('pokemon', {
        name: this.get('addPokemon'),
        body: "some text",
        lat: "latitude",
        lng: "longitude"
      });
      newPokemon.save();
    },
    newGame: function() {
      this.store.find('pokemon').then(function(pokemons) {
        pokemons.forEach(function(pokemon){
          pokemon.set('caught', false);
          pokemon.save();
        })
      })
    }
  }
});
