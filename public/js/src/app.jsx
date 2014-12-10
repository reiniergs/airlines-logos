var $ = require('jquery');
var _ = require('underscore');
var React = require('react'); 

var Sources = require('./sources.js');  
var ImagesList = require('./images-list.js');
var ImagesCollection = require('./images-collection.js');
var IataFilter = require('./iata-filter');

var App = React.createClass({           
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
			<div className="row">
				<div className='large-12 columns'>	
				 	<h1>Airlines logos</h1>
				 	<h4>Total : {this.state.images.length}</h4>
				</div> 	
				<ImagesList collection={this.state.images} source={this.state.source} iata={this.state.iata} />
			</div>
			);
	},
	filterByIata : function (iata) {
		this.setState({ iata : iata});
	}
});

$(document).ready(function () {
	React.render(
		<App />,
		document.getElementById('react-app') 
		);
});