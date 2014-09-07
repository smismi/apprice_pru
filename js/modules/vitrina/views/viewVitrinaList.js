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




	var VitrinaListView = Marionette.ItemView.extend({


		tagName: 'ul',
		template: "#some-template",


		render: function(){

			console.log("render list");

			this.$el.html("tesyt");
			this.collection.each(function(item) {



				var item_S = new ViewVitrinaItem({model: item});
				this.$el.append(item_S.render().el)
				console.log(item.get("name"));

			}, this);


			this.$el.appendTo("#vitrina_section");

			return this;

		}
	});


	return VitrinaListView;

});



