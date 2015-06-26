import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('pokedex');
  this.route('pokemon', {path: 'pokemon/:pkmn_id'});

  this.resource('map', function() {
    // this.resource('info-window');
  });
  this.route('info-window');
});

export default Router;
