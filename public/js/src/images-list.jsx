var React = require('react');

var ImagesList = React.createClass({
	defaultProp : function () {
		return {
			iata : ''
		}
	},
	render : function () {
		var imagesFilter = this.props.collection.filterBy('source',this.props.source);
		var imagesList = imagesFilter.map(function (imgModel) {
			return (
				<li key={imgModel.get('name')} className='logo'>
					<div className='small-12 columns'>
						<img src={imgModel.get('url')} />
					</div>
					<div className='small-12 columns'>
						<h4>Name :</h4>
						<h6>{imgModel.get('name')}</h6>
						<h4>Source :</h4>
						<h6>{imgModel.get('source')}</h6> 
					</div>	
				</li>
				);
		}); 
		return (
			<ul className='small-block-grid-2 large-block-grid-4'>
				{imagesList}
			</ul>
			);
	}
});
module.exports = ImagesList;