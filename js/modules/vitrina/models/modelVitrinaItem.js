/**
 * Created by smi on 02.09.14.
 */

define([
	'jquery',
	'underscore',
	'backbone'


], function($, _, Backbone){

	var Item = Backbone.Model.extend({
		defaults: {
			name: "anna"
		}
	});

	return Item;

});



