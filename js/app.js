
require.config({
	paths: {
		jquery: 'libs/jquery.2.0',
		underscore: 'libs/underscore',
		backbone: 'libs/backbone-min',
		marionette: 'libs/backbone.marionette.min',
		localStorage: 'backbone.localStorage-min',
		d3: 'libs/d3.v3.min'
	},
	shim: {
		'backbone': {
			deps: ["underscore"],
			exports: "Backbone"
		},
		'underscore': {
			exports: "_"
		},
		'marionette': {
			deps: ["backbone", "underscore"],
			exports: "libs/backbone.marionette.min"
		}
	}

});






require([

	// Load our app module and pass it to our definition function

	'modules/userlist/index'

], function(Userlist){


});


/////////////===============
//
//require([
//
//	// Load our app module and pass it to our definition function
//	'jquery',
//	'underscore',
//	'backbone',
//	'd3',
//	'modules/logo/logo',
//	'modules/clock/clock'
//
//], function($, _, Backbone, d3, Logo, Clock){
//	// The "app" dependency is passed in as "App"
//	Logo.init();
//	Clock.init();
//
//});

