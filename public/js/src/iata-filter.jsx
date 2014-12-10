var React = require('react');

var IataFilter = React.createClass({
	render : function () {
		return (
			<label> iata : 
			   	<input type='text' ref='iata' onInput={this.onInput}/> 
			</label>
			);
	},
	onInput : function () {
		this.props.cb(this.refs.iata.getDOMNode().value);
	}
});
module.exports = IataFilter;