import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';

const ProfilePage = ({ user }) => {
	const location = useLocation();
	const history = useHistory();

	console.log('We are in Route: ', location.pathname);

	const navigate = (path) => {
		history.push(path);
	};

	const goBack = () => {
		history.goBack();
	};

	const goForward = () => {
		history.goForward();
	};
	return (
		<div>
			<h1>Your Profile</h1>
			<button onClick={() => navigate('/tasks')}>Tasks</button>
			<button onClick={goBack}>Go Back</button>
		</div>
	);
};

export default ProfilePage;
