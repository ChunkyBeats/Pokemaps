import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var url = 'http://pokeapi.co/api/v1/pokemon/' + params.pkmn_id;
    return $.getJSON(url).then(function(responseJSON){
      console.log(responseJSON.sprites[0].resource_uri)
      // return responseJSON;
      var name = responseJSON['descriptions'][0]['name'];
      var image = $.getJSON(url).then(function(responseJSON){
        return "http://pokeapi.co/media/img/19.png"
      });
      return {
        name: name,
        image: image
      }
    });
  }
});
