/**
 * Created by smi on 02.09.14.
 */

define([
	'jquery',
	'underscore',
	'backbone',
	'marionette',
	'handlebars',
	'modules/vitrina/models/modelVitrinaItem',
	'text!modules/vitrina/templates/vitrinaListItem'



], function($, _, Backbone, Marionette, Handlebars, ModelVitrinaItem, template){

//
//	var modelVitrinaItem = new ModelVitrinaItem ({name: "Test Book"});


	var VitrinaListItem = Backbone.Marionette.ItemView.extend({
		tagName: 'li',
		template: function(item) {



//			return Mustache.to_html(template, item);
			var _t = Handlebars.compile(template);
			return _t(item);


		},
		initialize: function() {
			this.listenTo(this.model, "change", this.render);
		},

		events: {
			'click #btnDeleteBook': "deleteBook",
			'click #btnEditBook': "editBook"
		},

		deleteBook: function() {



			// do something to delete this book
		},

		editBook: function() {
			// do something to edit this book
		}
	});

	return VitrinaListItem;

});



