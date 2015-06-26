// import Ember from 'ember';
//
// export default Ember.Controller.extend({
//   pokeball: "http://www.gifmania.co.uk/Manga-Anime-Animated-Gifs/Animated-Pokemon/Pokeball/pokeball3-17373.gif",
//   actions: {
//     closeclick: function(id) {
//       // var newPokemon = this.store.find('pokemon', id);
//       // var pokedex = this.get('controllers.pokedex.model');
//       // pokedex.get('pokemons').pushObject(newPokemon);
//       // pokedex.save();
//       alert('you caught it!');
//
//       newPokemon.setProperties({
//         caught: true,
//         icon: pokeball
//       });
//     }
//   }
// });
import InfoWindowController from './google-map/info-window';

export default InfoWindowController.extend({
  actions: {
    throwPokeball: function() {
      alert('')
    }
  }

});
