/**
 * Created by smi on 02.09.14.
 */

define([
	'jquery',
	'underscore',
	'backbone',
	'marionette',
	'modules/vitrina/views/viewVitrinaItem',
	'modules/vitrina/models/modelVitrinaItem'


], function($, _, Backbone, Marionette, ViewVitrinaItem, ModelVitrinaItem){


	var VitrinaListView = Backbone.Marionette.CollectionView.extend({
		childView: ViewVitrinaItem,
		tagName: 'ul'
	});


	return VitrinaListView;

});



