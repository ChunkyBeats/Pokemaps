import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var url = 'http://pokeapi.co/api/v1/pokedex/1';
    return $.getJSON(url).then(function(responseJSON){
      var pokemons = [];
      responseJSON.pokemon.forEach(function(pokemon){
        pokemon.resource_uri;
        var newURL = 'http://pokeapi.co/' + pokemon.resource_uri;
        return $.getJSON(newURL).then(function(addPokemon) {
          if(addPokemon.pkdx_id < 151){
            pokemons.push(addPokemon);
          }
        });
      });
      return pokemons;
    });
  }
});
