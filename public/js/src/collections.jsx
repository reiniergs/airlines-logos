var $ = require('jquery');
var _ = require('underscore'); 
var Backbone = require('backbone');   

var sourceCollection = Backbone.Collection.extend({
	url : 'sources/',
	initialize : function () {
		console.log('Collection initilized');
	}
});

var imagesCollection = Backbone.Collection.extend({
	initialize : function () {

	}
});

module.exports = { 
	sourceCollection : sourceCollection,
	imagesCollection : imagesCollection 
};