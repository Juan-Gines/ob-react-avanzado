import React from 'react';
import {
	login,
	getAllUsers,
	getAllPagedUsers,
	getUsersByID,
	createUser,
	updateUserByID,
	deleteUserByID,
} from '../../services/axiosCRUDService';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const AxiosCRUDExample = () => {
	const initialCredentials = {
		email: '',
		password: '',
	};

	const loginSchema = Yup.object().shape({
		email: Yup.string().email('Invalid email format').required('Email is required'),
		password: Yup.string().required('Password is required'),
	});

	const authUser = (values) => {
		login(values.email, values.password)
			.then((res) => {
				if (res.data.token) {
					alert(JSON.stringify(res.data));
					sessionStorage.setItem('token', res.data.token);
				} else {
					sessionStorage.removeItem('token');
					throw new Error('Login failure');
				}
			})
			.catch((error) => {
				alert(`Something went wrong: ${error}`);
				sessionStorage.removeItem('token');
			})
			.finally(() => console.log('Login done'));
	};

	// CRUD Examples
	const obtainAllUsers = () => {
		getAllUsers()
			.then((res) => {
				if (res.data && res.status === 200) {
					alert(JSON.stringify(res.data.data));
				} else {
					throw new Error('No users found');
				}
			})
			.catch((error) => alert(`Something went wrong: ${error}`));
	};

	const obtainAllPagedUsers = () => {
		getAllPagedUsers()
			.then((res) => {
				if (res.data && res.status === 200) {
					alert(JSON.stringify(res.data.data));
				} else {
					throw new Error('No users found in page');
				}
			})
			.catch((error) => alert(`Something went wrong: ${error}`));
	};

	const obtainUserByID = (id) => {
		getUsersByID(id)
			.then((res) => {
				if (res.data && res.status === 200) {
					alert(JSON.stringify(res.data.data));
				} else {
					throw new Error('User not found');
				}
			})
			.catch((error) => alert(`Something went wrong: ${error}`));
	};

	const createNewUser = (name, job) => {
		createUser(name, job)
			.then((res) => {
				if (res.data && res.status === 201) {
					alert(JSON.stringify(res.data));
				} else {
					throw new Error('User not created');
				}
			})
			.catch((error) => alert(`Something went wrong: ${error}`));
	};

	const updateUser = (id, name, job) => {
		updateUserByID(id, name, job)
			.then((res) => {
				if (res.data && res.status === 200) {
					alert(JSON.stringify(res.data));
				} else {
					throw new Error('User not found & no update done');
				}
			})
			.catch((error) => alert(`Something went wrong: ${error}`));
	};

	const deleteUser = (id) => {
		deleteUserByID(id)
			.then((res) => {
				if (res.status === 204) {
					alert(`User with id: ${id} successfully deleted`);
				} else {
					throw new Error('User not found & no delete found');
				}
			})
			.catch((error) => alert(`Something went wrong: ${error}`));
	};

	return (
		<div>
			<h4>Login Formik</h4>
			<Formik
				//*** Initial values that the form will take */
				initialValues={initialCredentials}
				//*** Yup Validation Schema */
				validationSchema={loginSchema}
				//*** onSubmit Event */
				onSubmit={async (values) => {
					authUser(values);
				}}
			>
				{/* We obtain props from Formik */}
				{({ values, touched, errors, isSubmitting, handleChange, handleBlur }) => (
					<Form>
						<label htmlFor="email">Email</label>
						<Field id="email" name="email" placeholder="example@email.com" type="text" />
						{/* Email Errors */}

						<ErrorMessage name="email" component="div" />

						<label htmlFor="password">Password</label>
						<Field id="password" name="password" placeholder="password" type="password" />

						{/* Password Errors */}
						<ErrorMessage name="password" component="div" />

						<button type="submit">Submit</button>
						{isSubmitting ? <p>Login your credentials ... </p> : null}
					</Form>
				)}
			</Formik>
			<div>
				<button onClick={obtainAllUsers}>Get All Users whith Axios</button>
				<button onClick={() => obtainAllPagedUsers(1)}>Get All Users Paged 1 whith Axios</button>
				<button onClick={() => obtainUserByID(1)}>Get User by ID</button>
				<button onClick={() => createNewUser('Capullo', 'Nini')}>Create user</button>
				<button onClick={() => updateUser(1, 'Capullo', 'Nini')}>Update user</button>
				<button onClick={() => deleteUser(200)}>Delete user</button>
			</div>
		</div>
	);
};

export default AxiosCRUDExample;
