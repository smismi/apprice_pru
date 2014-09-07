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





	var Vitrina = function(options){
		// Constructor for SomeModule


		var collectionVitrinaItems = new CollectionVitrinaItems([

			{name: 'peter'},
			{name: 'john'},
			{name: 'huilo'},
			{name: 'putin'},
			{name: 'lalalal'}

		])



		var viewVitrinaHead = new ViewVitrinaHead();
		var viewVitrinaList = new ViewVitrinaList({
			collection: collectionVitrinaItems
		});

		viewVitrinaList.render();


	};






	return Vitrina;



});

