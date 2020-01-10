import React from 'react';

import propTypes from 'prop-types';

const sidebar = (props) => {
	let sideText = null;

	if(props.qaPairs.length === 0) {
		sideText = <p>Here you can find no questions. Feel free to create your own questions! </p>;
	}

	else if (props.qaPairs.length === 1) {
		sideText = <p>Here you can find one question. Feel free to create your own questions! </p>;
	}
	else if (props.qaPairs.length > 1) {
		sideText = <p>Here you can find {props.qaPairs.length} questions. Feel free to create your own questions! </p>;
	}

	return sideText;
}

sidebar.propTypes = {
	submit: propTypes.func
};

export default sidebar;