/**
 * Created by smi on 02.09.14.
 */

define([
	'jquery',
	'underscore',
	'backbone',
	'marionette'


], function ($, _, Backbone, Marionette) {


	var VitrinaHeadView = Marionette.ItemView.extend({
		el: '#vitrina_section',

		template: false,

		ui: {
			paragraph: 'p',
			button: '.my-button'
		},

		events: {
			'click @ui.button': 'clickedButton',
			'click @ui.paragraph': 'clickedP'
		},

		clickedButton: function () {
			console.log('I clicked the button!');
		},
		clickedP: function () {
			console.log('I clicked the paragraph!');
		}
	});


//	vitrinaHeadView.ui.paragraph.text();        // returns 'Hello World'
//	vitrinaHeadView.ui.button.trigger('click'); // logs 'I clicked the button!'


	return VitrinaHeadView;

});



