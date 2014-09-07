/**
 * Created by smi on 02.09.14.
 */

define([
	'jquery',
	'underscore',
	'backbone',
	'marionette',
	'modules/vitrina/models/modelVitrinaItem'



], function($, _, Backbone, Marionette, ModelVitrinaItem){


//	var modelVitrinaItem = new ModelVitrinaItem ({name: "Test Book"});


	var VitrinaListItem = Backbone.Marionette.ItemView.extend({
		tagName: 'li',
//		template: "#vitrinaListItemView",
		template: _.template('<strong><%= name %></strong>'),

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



