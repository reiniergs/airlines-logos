var $ = require('jquery');
var React = require('react');

var OptionWrapper = React.createClass({displayName: 'OptionWrapper',
	render : function () {
		return React.createElement("option", {key: this.props.text}, this.props.text);
	}
});

var Sources = React.createClass({displayName: 'Sources',
	render : function () {
		var options = this.props.list.map(function (item) {
			return (
				    React.createElement("select", null, 
						React.createElement(OptionWrapper, {text: item})
					)
				);
		});
		var css = {
			width : '200px'
		}
		return (
			React.createElement("label", null, " Sources :",  
					options
			)	
			);
	}
});
module.exports = Sources;