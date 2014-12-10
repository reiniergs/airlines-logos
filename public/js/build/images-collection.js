var Backbone = require('backbone');
var _ = require('underscore');

var imagesCollection = Backbone.Collection.extend({
	url : '/images',
	initialize : function () {

	},
	getSources : function () {
		return _.uniq(this.map(function (img) {
			return  img.get('source');
		}))
	},
	filterBy : function (prop,value) {
       value = typeof value == undefined ? '' : value;
       return this.filter(function (model) {
       	    return model.get(prop) == value;
       }); 
	}
});
module.exports = imagesCollection;