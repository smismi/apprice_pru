/**
 * Created by smi on 02.09.14.
 */


define([
	'jquery',
	'underscore',
	'backbone',
	'marionette',
	'modules/vitrina/views/viewVitrinaHead',
	'modules/vitrina/views/viewVitrinaList',
	'modules/vitrina/views/viewVitrinaItem',
	'modules/vitrina/collections/collectionVitrinaItems'

//], function($, _, Backbone, Marionette, Userlist, Useritemview, Userlistview, Test01){
], function($, _, Backbone, Marionette, ViewVitrinaHead, ViewVitrinaList,  ViewVitrinaItem, CollectionVitrinaItems){



	var Vitrina = Backbone.Marionette.Controller.extend({


		initialize: function (options) {

		},

		ShowBooksList: function (options) {
			this.collection = new CollectionVitrinaItems([
				{name: '1'},
				{name: '2'},
				{name: '3'},
				{name: '4'},
				{name: '5'}
			]);

			var booksView = new ViewVitrinaList({ collection: this.collection });


//			options.region.show(booksView);


		}



	});




	return Vitrina;



});

