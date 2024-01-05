import React, { useEffect, useState } from 'react';
import { getAllUsers, getUserDetails, login } from '../../services/fetchService';
const FetchExample = () => {
	const [users, setUsers] = useState([]);
	const [selectedUser, setSelectedUser] = useState(null);
	const [totalUsers, setTotalUsers] = useState(12);
	const [usersPerPage, setUsersPerPage] = useState(6);
	const [pages, setPages] = useState(2);

	useEffect(() => {
		obtainUsers();
	}, []);

	const obtainUsers = () => {
		getAllUsers()
			.then((res) => {
				console.log('All Users', res.data);
				setUsers(res.data);
				setPages(res.total_pages);
				setUsersPerPage(res.per_page);
				setTotalUsers(res.total);
			})
			.catch((error) => {
				alert(`Error while retreiving the users: ${error}`);
			})
			.finally(() => {
				console.log('Ended obtaining users:');
				console.table(users);
			});
	};

	const obtainPagedUsers = (page) => {
		getAllUsers(page)
			.then((res) => {
				console.log('All Pages Users', res.data);
				setUsers(res.data);
				setPages(res.total_pages);
				setUsersPerPage(res.per_page);
				setTotalUsers(res.total);
			})
			.catch((error) => {
				alert(`Error while retreiving the users: ${error}`);
			})
			.finally(() => {
				console.log('Ended obtaining users:');
				console.table(users);
			});
	};

	const obtainUserDetails = (id) => {
		getUserDetails(id)
			.then((res) => {
				console.log('User info:', res.data);
				setSelectedUser(res.data);
			})
			.catch((error) => {
				alert(`Error while retreiving the user: ${error}`);
			})
			.finally(() => {
				console.log('Ended obtaining user:');
				console.table(users);
			});
	};

	const authUser = () => {
		login('eve.holt@reqres.in', 'cityslicka')
			.then((res) => {
				console.log('TOKEN:', res.token);
				alert('Login sucesfull. Redirect to home...');
				sessionStorage.setItem('token', res.token);
			})
			.catch((error) => {
				alert(`Error auth user: ${error}`);
			})
			.finally(() => {
				console.log('Ended obtaining user:');
			});
	};

	return (
		<div>
			{/* Button to simulate login */}
			<button onClick={authUser}>login</button>
			<h2>Users:</h2>
			{users.map((user, index) => (
				<p key={index} onClick={() => obtainUserDetails(index + 1)}>
					{user.first_name} {user.last_name}
				</p>
			))}
			<p>
				Showing {usersPerPage} users of {totalUsers} in total.
			</p>
			<button onClick={() => obtainPagedUsers(1)}>1</button>
			<button onClick={() => obtainPagedUsers(2)}>2</button>
			<div>
				<h3>User Details</h3>
				{selectedUser !== null ? (
					<div>
						<p>Name: {selectedUser.first_name}</p>
						<p>Last Name: {selectedUser.last_name}</p>
						<p>Email: {selectedUser.email}</p>
						<img
							src={selectedUser.avatar}
							style={{ height: '200px', width: '200px' }}
							alt="avatar"
						/>
					</div>
				) : (
					<p>Select a user for detaills.</p>
				)}
			</div>
		</div>
	);
};

export default FetchExample;
