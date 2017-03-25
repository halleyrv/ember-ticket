import Ember from 'ember';

export default Ember.Controller.extend({
	/**Inyectamos session en application controller para acceder a ella desde cualquier ruta*/
	session: Ember.inject.service('session')

});
