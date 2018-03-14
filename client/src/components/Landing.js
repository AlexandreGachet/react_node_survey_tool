import React from 'react';

import { Link } from 'react-router-dom';

const Landing = () => {
	return (
		<div className="container" style={{ textAlign: 'center' }}>
			<h1>Welcome!</h1>

			<p>Collect feedback from your users</p>
			<Link className="waves-effect waves-light btn" to="/surveys">
				Access my Surveys
			</Link>
		</div>
	);
};

export default Landing;
