import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchSurveys } from '../../actions';

class SurveyList extends Component {
	componentDidMount() {
		this.props.fetchSurveys();
	}

	renderSurveys() {
		return this.props.surveys.reverse().map(survey => {
			return (
				<div className="card darken-1" key={survey._id}>
					<div className="card-content">
						<span className="card-title">{survey.title}</span>
						<p>{survey.body}</p>
						<p className="right">
							Sent on:{' '}
							{new Date(survey.dateSent).toLocaleDateString()}
						</p>
					</div>
					<div className="card-action">
						<a>Yes: {survey.yes}</a>
						<a>No: {survey.no}</a>
					</div>
				</div>
			);
		});
	}

	render() {
		if (this.props.surveys.length === 0) {
			return (
				<div className="container" style={{ textAlign: 'center' }}>
					<p>You don't have any survey</p>
					<Link
						className="waves-effect waves-light btn"
						to="/surveys/new"
					>
						Create your first survey
					</Link>
				</div>
			);
		}
		return <div>{this.renderSurveys()}</div>;
	}
}

const mapStateToProps = ({ surveys }) => ({ surveys });

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);
