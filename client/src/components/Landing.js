import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

class Landing extends Component {
	render() {
		const button = this.props.auth ? (
			<Link className="waves-effect waves-light btn" to="/surveys">
				Access my Surveys
			</Link>
		) : null;
		return (
			<div className="container" style={{ textAlign: 'center' }}>
				<h1>Welcome!</h1>

				<p>Collect feedback from your users</p>
				{button}
			</div>
		);
	}
}

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps)(Landing);
