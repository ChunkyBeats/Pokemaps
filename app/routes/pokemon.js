import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var url = 'http://pokeapi.co/api/v1/pokemon/' + params.pkmn_id;
    return $.getJSON(url).then(function(responseJSON){

      var imageUri = 'http://pokeapi.co' + responseJSON['sprites'][0]['resource_uri']
      var modelObject = {}

      $.getJSON(imageUri).then(function(imageResponse) {
        modelObject['name'] = responseJSON['name'];
        modelObject['image'] = 'http://pokeapi.co' + imageResponse.image
      });
      return modelObject
    });
  }
});
