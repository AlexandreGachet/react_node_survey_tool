import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';

class SurveyNew extends Component {
	state = { showFormReview: false };

	renderContent() {
		if (this.state.showFormReview) {
			return (
				<div className="container">
					<h3>Survey Preview</h3>
					<SurveyFormReview
						onCancel={() => {
							this.setState({ showFormReview: false });
						}}
					/>
				</div>
			);
		}
		return (
			<div className="container">
				<h3>Create a Survey</h3>
				<SurveyForm
					onSurveySubmit={() =>
						this.setState({ showFormReview: true })
					}
				/>
			</div>
		);
	}

	render() {
		return <div>{this.renderContent()}</div>;
	}
}

export default reduxForm({
	form: 'surveyForm'
})(SurveyNew);
