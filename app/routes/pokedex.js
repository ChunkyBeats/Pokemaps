import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var url = 'http://pokeapi.co/api/v1/pokedex/1';
    return $.getJSON(url).then(function(responseJSON){
      var pokemons = [];
      responseJSON.pokemon.forEach(function(pokemon){
        pokemons.push(pokemon);
      });
      return pokemons;
    });
  }
});
