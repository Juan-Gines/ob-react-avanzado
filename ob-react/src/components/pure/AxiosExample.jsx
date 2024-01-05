import { Button } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { getRandomUser } from '../../services/axiosService';

const AxiosExample = () => {
	const [user, setUser] = useState(null);

	const obtainUser = () => {
		getRandomUser()
			.then((res) => {
				console.log(res.data.results[0]);
				setUser(res.data.results[0]);
			})
			.catch((error) => {
				alert(`Something went wrong: ${error}`);
			});
	};

	return (
		<div>
			<h1>Axios Example</h1>
			{user !== null ? (
				<div>
					<img alt="avatar" src={user.picture.large} />
					<h2>
						{user.name.title}
						{user.name.first}
						{user.name.last}
					</h2>
					<h3>Email: {user.email}</h3>
				</div>
			) : null}
			<Button onClick={obtainUser}>Generate a new user</Button>
		</div>
	);
};

export default AxiosExample;
