/**
 * Created by smi on 02.09.14.
 */
define([
	'jquery',
	'underscore',
	'backbone',
	'modules/vitrina/models/modelVitrinaItem'
], function($, _, Backbone, Model){



	var CollectionVitrinaItems = Backbone.Collection.extend({

		model: Model,
		comparator: function(item) {
			return item.get("name")
		},
		strategies: {
			asc: function (item) {
				return item.get("sss");
			},
			desc: function(a, b) {
				a = a.get('sss');
				b = b.get('sss');
				return a < b ?  1
					: a > b ? -1
					:          0;
			}
		},
		changeSort: function (sortProperty) {
			this.comparator = this.strategies[sortProperty];
		}


	});



	return CollectionVitrinaItems;





});

