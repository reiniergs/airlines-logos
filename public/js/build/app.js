var $ = require('jquery');
var _ = require('underscore');
var React = require('react'); 

var Sources = require('./sources.js');  
var ImagesList = require('./images-list.js');
var ImagesCollection = require('./images-collection.js');
var IataFilter = require('./iata-filter');

var App = React.createClass({displayName: 'App',           
	getInitialState : function () {
		return {  
			images : new ImagesCollection(), 
			source : 'c.fareportal.com',
			iata   : ''

		};
	},
	componentDidMount : function () {
		this.state.images.fetch({
			success : function (collection) {
				this.setState({ images : collection });
			}.bind(this)
		});
	},
	render : function () {
		return (
			React.createElement("div", {className: "row"}, 
				React.createElement("div", {className: "large-12 columns"}, 	
				 	React.createElement("h1", null, "Airlines logos"), 
				 	React.createElement("h4", null, "Total : ", this.state.images.length)
				), 	
				React.createElement(ImagesList, {collection: this.state.images, source: this.state.source, iata: this.state.iata})
			)
			);
	},
	filterByIata : function (iata) {
		this.setState({ iata : iata});
	}
});

$(document).ready(function () {
	React.render(
		React.createElement(App, null),
		document.getElementById('react-app') 
		);
});