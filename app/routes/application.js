import Ember from 'ember';

export default Ember.Route.extend({
  needs: ['pokemon'],
  model: function() {
    var image = "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/004.png";
    var pokeball = "http://www.gifmania.co.uk/Manga-Anime-Animated-Gifs/Animated-Pokemon/Pokeball/pokeball3-17373.gif";

    return this.store.find('pokemon');
  }
});
