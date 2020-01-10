import React from 'react';

const tooltip = (props) => {
	return (
		<span className="tooltip" data-tooltip={props.infoText}>
			<p>?</p>
		</span>
	);
}

export default tooltip;