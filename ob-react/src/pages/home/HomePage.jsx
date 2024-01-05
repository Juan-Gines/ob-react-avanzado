import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';

const HomePage = () => {
	const location = useLocation();
	const history = useHistory();

	console.log('We are in Route: ', location.pathname);

	const navigate = (path) => {
		history.push(path);
	};

	const navigateProps = (path) => {
		history.push({
			pathname: path,
			search: '?online=true', // Query params
			state: {
				online: true,
			},
		});
	};
	return (
		<div>
			<h1>Home Page</h1>
			<button onClick={() => navigateProps('/online-state')}>
				Go To Page whith state // query params
			</button>
			<button onClick={() => navigate('/profile')}>Go To Profile</button>
		</div>
	);
};

export default HomePage;
