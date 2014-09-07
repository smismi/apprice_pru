/**
 * Created by smi on 02.09.14.
 */

define([
	'jquery',
	'underscore',
	'backbone'

], function($, _, Backbone, Events, Router, Model, Items){


	var searchFormView = Backbone.View.extend({


		el: $('#search_header').get(0),

		events: {
			'click': 'sayHello'
		},

		initialize: function(){

			console.log("view:search:: init")
		},

		sayHello: function(){

			console.log("view:search:: HELLO!!")
		}





	});



	return searchFormView;

});



