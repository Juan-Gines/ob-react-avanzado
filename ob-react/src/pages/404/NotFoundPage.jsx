import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
const NotFoundPage = () => {
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
			<h1>404 - Page Not Found</h1>
			<button onClick={() => navigate('/')}>Go To Home</button>
		</div>
	);
};

export default NotFoundPage;
