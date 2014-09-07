
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
	'jquery',
	'underscore',
	'backbone',
	'marionette',
	'modules/vitrina/index',
	'modules/search/index'

], function($, _, Backbone, Marionette, Vitrina, Search){



	var App = new Backbone.Marionette.Application();














	App.addInitializer(function(options) {
		App.vitrina = new Vitrina(options);



	});


	App.addInitializer(function(options) {
		App.search = new Search(options);
	});



	var options = {
		something: "some value",
		another: "#some-selector"
	};



	App.addRegions({
		searchRegion: "#seacrh_section",
		vitrinaRegion: "#vitrina_section"
	});



	var vitrina = new Vitrina();
	vitrina.ShowBooksList({ region: App.vitrinaRegion });



	App.start(options);



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

