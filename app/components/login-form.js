import Ember from 'ember';

export default Ember.Component.extend({

	actions: {
	    authenticate: function() {
	    	/*this properties get from the component login-form.hbs*/
	    	var credentials = this.getProperties('identification', 'password')
            this.sendAction('action', credentials);
	       
	    }
   }
});
