import React, { Component } from "react";
import "./_app.sass";

import { Statistics } from "../components/Statistics/Statistics";
import { FeedbackOptions } from "../components/FeedbackOptions/FeedbackOptions";
import { Section } from "../components/Section/Section";
import { Notification } from "../components/Notification/Notification";

export default class App extends Component {
	state = {
		good: 0,
		neutral: 0,
		bad: 0,
	};

	handleFeedback = (e) => {
		const targetName = e.target.name;
		this.setState((prevState) => ({
			[targetName]: prevState[targetName] + 1,
		}));
		this.countTotalFeedback();
		this.countPositiveFeedback();
	};

	countTotalFeedback() {
		const { bad, good, neutral } = this.state;
		const total = bad + good + neutral;
		return total;
	}

	countPositiveFeedback() {
		const { good } = this.state;
		const total = this.countTotalFeedback();
		return Number(((good / total) * 100).toFixed(1));
	}

	render() {
		const { good, neutral, bad } = this.state;

		return (
			<>
				<div className="container">
					<Section title="Please, leave your feedback">
						<FeedbackOptions
							props={this.state}
							handleFeedback={this.handleFeedback}
						/>
					</Section>
					<Section title="Statisctics">
						{this.countTotalFeedback() > 0 ? (
							<Statistics
								good={good}
								bad={bad}
								neutral={neutral}
								total={this.countTotalFeedback()}
								positiveFeedbackPercentage={this.countPositiveFeedback()}
							/>
						) : (
							<Notification message="No feedback given :(" />
						)}
					</Section>
				</div>
			</>
		);
	}
}
