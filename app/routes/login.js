import Ember from 'ember';

export default Ember.Route.extend({
	session: Ember.inject.service('session'),
	/* If session user is active redirect to dashboard when user acces login route*/
	beforeModel() {
		/* We validate if the session is autenitcade if is true redirect to dashboard*/
		if (this.get('session.isAuthenticated')) {
		  this.transitionTo('dashboard');	
		}

    }, 
	actions:{
		login_action: function(credentials){
	        var  authenticator = 'authenticator:jwt';
	        this.get('session').authenticate(authenticator, credentials).then(() =>{
	        	this.transitionTo('dashboard');
	        },(err)=>{
	        	alert('Error obtaining token: ' + err.responseText());
	        });
			
		}
	}
});
