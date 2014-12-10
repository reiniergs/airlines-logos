var React = require('react');

var ImagesList = React.createClass({displayName: 'ImagesList',
	defaultProp : function () {
		return {
			iata : ''
		}
	},
	render : function () {
		var imagesFilter = this.props.collection.filterBy('source',this.props.source);
		var imagesList = imagesFilter.map(function (imgModel) {
			return (
				React.createElement("li", {key: imgModel.get('name'), className: "logo"}, 
					React.createElement("div", {className: "small-12 columns"}, 
						React.createElement("img", {src: imgModel.get('url')})
					), 
					React.createElement("div", {className: "small-12 columns"}, 
						React.createElement("h4", null, "Name :"), 
						React.createElement("h6", null, imgModel.get('name')), 
						React.createElement("h4", null, "Source :"), 
						React.createElement("h6", null, imgModel.get('source'))
					)	
				)
				);
		}); 
		return (
			React.createElement("ul", {className: "small-block-grid-2 large-block-grid-4"}, 
				imagesList
			)
			);
	}
});
module.exports = ImagesList;