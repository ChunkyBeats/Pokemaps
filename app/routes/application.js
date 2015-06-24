import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var pokeball = "http://www.gifmania.co.uk/Manga-Anime-Animated-Gifs/Animated-Pokemon/Pokeball/pokeball3-17373.gif";
    return Ember.A([
    {pokedexNumber: "004", title: "Charmander", lat: 45.521408, lng: -122.676036, body: "A fiery little pokemon.", icon: pokeball, caught: false},
  {title: "Squirtle", lat: 45.522779, lng: -122.676061, body: "A watery little pokemon.", icon: pokeball},
{title: "Bulbasaur", lat: 45.520923, lng: -122.674448, body: "A grassy little pokemon.", icon: pokeball}
    ]);
  }
});
