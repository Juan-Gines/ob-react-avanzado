import axios from 'axios';

/**
 *
 * @param {string} email
 * @param {string} password
 */
export const login = (email, password) => {
	let body = {
		email,
		password,
	};

	// Returns the response with a Promise
	return axios.post('https://reqres.in/api/login', body);
};

// TODO: Obtain All Users
export const getAllUsers = () => {
	return axios.get('https://reqres.in/api/users');
};

// TODO: Obtain All Users
export const getAllPagedUsers = (page) => {
	return axios.get(`https://reqres.in/api/users${page}`);
};

// TODO: Obtain User by id
export const getUsersByID = (id) => {
	return axios.get(`https://reqres.in/api/users/${id}`);
};

// TODO: Create User
export const createUser = (name, job) => {
	let body = {
		name,
		job,
	};

	// Returns the response with a Promise
	return axios.post('https://reqres.in/api/users', body);
};

// TODO: Update User
export const updateUserByID = (id, name, job) => {
	let body = {
		name,
		job,
	};

	// Returns the response with a Promise
	return axios.put(`https://reqres.in/api/users/${id}`, body);
};

// TODO: Delete User
export const deleteUserByID = (id) => {
	return axios.delete(`https://reqres.in/api/users/${id}`);
};
