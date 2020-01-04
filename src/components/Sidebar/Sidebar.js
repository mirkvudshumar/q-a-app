import React from 'react';

const sidebar = (props) => {
	let sideText = null;

	if(props.qa.length === 0) {
		sideText = <p>Here you can find no questions. Feel free to create your own questions! </p>;
	}

	else if (props.qa.length === 1) {
		sideText = <p>Here you can find one question. Feel free to create your own questions! </p>;
	}
	else if (props.qa.length > 1) {
		sideText = <p>Here you can find {props.qa.length} questions. Feel free to create your own questions! </p>;
	}

	return sideText;
}

export default sidebar;