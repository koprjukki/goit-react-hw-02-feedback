import React from "react";
import PropTypes from "prop-types";

export const Statistics = ({
	good,
	bad,
	neutral,
	total,
	positiveFeedbackPercentage,
}) => {
	return (
		<>
			<p>Good: {good}</p>
			<p>Bad: {bad}</p>
			<p>Neutral: {neutral}</p>
			<p>Total: {total}</p>
			<p>Positive Feedback: {positiveFeedbackPercentage}%</p>
		</>
	);
};

Statistics.propTypes = {
	good: PropTypes.number.isRequired,
	bad: PropTypes.number.isRequired,
	neutral: PropTypes.number.isRequired,
	total: PropTypes.number.isRequired,
	positiveFeedbackPercentage: PropTypes.number.isRequired,
};
