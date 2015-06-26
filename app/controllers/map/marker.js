import GoogleMapMarkerController from '../google-map/marker';

export default GoogleMapMarkerController.extend({

  actions: {
    throwPokeball: function(id) {
      this.store.find('pokemon', id).then(function(thisPokemon){
        thisPokemon.set('caught', true);
        thisPokemon.save();
      });
    },
    release: function(id) {
      this.store.find('pokemon', id).then(function(thisPokemon){
        thisPokemon.set('caught', false);
        thisPokemon.save();
      });
    }
  }

});
