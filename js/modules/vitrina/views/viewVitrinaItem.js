/**
 * Created by smi on 02.09.14.
 */

define([
	'jquery',
	'underscore',
	'backbone',
	'marionette'


], function($, _, Backbone, Marionette){


	var VitrinaListItem = Marionette.ItemView.extend({
		tagName: "li",
		template: _.template("<a href='<%-name%>'><%-name%></a>"),

		render: function(){

			console.log("render item");
			this.$el.html( this.template( this.model.toJSON() ) );
			return this;
		}
	});



	return VitrinaListItem;

});



