var React = require('react');

var IataFilter = React.createClass({displayName: 'IataFilter',
	render : function () {
		return (
			React.createElement("label", null, " iata :",  
			   	React.createElement("input", {type: "text", ref: "iata", onInput: this.onInput})
			)
			);
	},
	onInput : function () {
		this.props.cb(this.refs.iata.getDOMNode().value);
	}
});
module.exports = IataFilter;