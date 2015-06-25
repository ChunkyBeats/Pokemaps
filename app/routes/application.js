import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var image = "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/004.png";
    var pokeball = "http://www.gifmania.co.uk/Manga-Anime-Animated-Gifs/Animated-Pokemon/Pokeball/pokeball3-17373.gif";
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
  }
});
