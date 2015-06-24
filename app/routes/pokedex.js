import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return $.getJSON('http://pokeapi.co/api/v1/pokedex/1/').then(function(responseJSON){
      var pokemons = [];
      responseJSON.pokemon.forEach(function(pokemon){
        pokemons.push(pokemon);
      });
      return pokemons;
    });
  }
});
