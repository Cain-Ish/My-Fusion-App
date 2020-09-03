import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CustomFieldHelloWorld extends Component {

	render() {
		const {addressee = 'World'} = this.props.customFields;

		return (
			<div className='hello_text'>Hello {addressee}</div>
		);
	}
}

CustomFieldHelloWorld.static = true;

CustomFieldHelloWorld.propTypes = {
	customFields: PropTypes.shape({
		addressee: PropTypes.string.tag({
			label: 'Addressee',
			description: 'To Whom to do you want to say Hello?'
		}),
	}),
};

export default CustomFieldHelloWorld;