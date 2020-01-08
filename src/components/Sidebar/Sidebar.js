import React from 'react';

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

export default sidebar;