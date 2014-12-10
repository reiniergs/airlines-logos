var $ = require('jquery');
var React = require('react');

var OptionWrapper = React.createClass({
	render : function () {
		return <option key={this.props.text}>{this.props.text}</option>;
	}
});

var Sources = React.createClass({
	render : function () {
		var options = this.props.list.map(function (item) {
			return (
				    <select>
						<OptionWrapper text={item} />
					</select>
				);
		});
		var css = {
			width : '200px'
		}
		return (
			<label> Sources : 
					{options}
			</label>	
			);
	}
});
module.exports = Sources;