import React from "react";
import PropTypes from "prop-types";

export const FeedbackOptions = ({ props, handleFeedback }) => {
	return (
		<div>
			{Object.keys(props).map(function (key) {
				return (
					<button
						type="button"
						value={props[key]}
						name={key}
						key={key}
						onClick={handleFeedback}
					>
						{key}
					</button>
				);
			})}
		</div>
	);
};

FeedbackOptions.propTypes = {
	props: PropTypes.shape({
		good: PropTypes.number,
		bad: PropTypes.number,
		neutral: PropTypes.number,
	}).isRequired,
	handleFeedback: PropTypes.func.isRequired,
};
