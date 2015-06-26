import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  lat: DS.attr('number'),
  lng: DS.attr('number'),
  title: DS.attr('string'),
  body: DS.attr('string'),
  icon: DS.attr('string'),
  pokedexId: DS.attr('number')
});
