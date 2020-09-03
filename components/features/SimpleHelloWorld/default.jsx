import React from 'react';
import PropTypes from 'prop-types';
import { useComponentContext } from 'fusion:context';

const SimpleHelloWorld = () => {
	return (
		<div className='hello_text'>Hello World!</div>
	);
}

SimpleHelloWorld.static = true;

export default SimpleHelloWorld;