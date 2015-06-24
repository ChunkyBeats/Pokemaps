import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var url = 'http://pokeapi.co/api/v1/pokemon/' + params.pkmn_id;
    return $.getJSON(url).then(function(responseJSON){
      return responseJSON;
    });
  }
});
