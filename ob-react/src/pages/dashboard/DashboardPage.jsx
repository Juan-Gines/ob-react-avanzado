import React from 'react';
import Button from '@mui/material/Button';
import Copyrigth from '../../components/pure/Copyrigth';
import { useHistory } from 'react-router-dom';
const DashboardPage = () => {
	const history = useHistory();

	const logout = () => {
		history.push('/login');
	};

	return (
		<div>
			<Button variant="contained" onClick={logout}>
				Logout
			</Button>
			<Copyrigth></Copyrigth>
		</div>
	);
};

export default DashboardPage;
