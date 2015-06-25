import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return Ember.A([
      {
        title: "Charmander",
        lat: 45.521408,
        lng: -122.676036,
        body: "A fiery little pokemon.",
        icon: "http://pldh.net/media/pokemon/gen4/hgss/004.png",
        caught: false
      },
      {
        title: "Squirtle",
        lat: 45.522779,
        lng: -122.676061,
        body: "A watery little pokemon.",
        icon: "http://pldh.net/media/pokemon/gen4/hgss/007.png"
      },
      {
        title: "Bulbasaur",
        lat: 45.520923,
        lng: -122.674448,
        body: "A grassy little pokemon.",
        icon: "http://pldh.net/media/pokemon/gen4/hgss/001.png"
      }
    ]);
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
