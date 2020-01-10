import React from 'react';

import propTypes from 'prop-types';

const tooltip = (props) => {
	return (
		<span className="tooltip" data-tooltip={props.infoText}>
			<p>?</p>
		</span>
	);
}

tooltip.propTypes = {
	infoText: propTypes.string.isRequired
};

export default tooltip;