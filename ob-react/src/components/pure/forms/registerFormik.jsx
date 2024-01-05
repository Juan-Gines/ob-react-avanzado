import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Models
import { User } from '../../../models/user.class';
import { ROLES } from '../../../models/roles.enum';

const RegisterFormik = () => {
	let user = new User();

	const initialValues = {
		username: '',
		email: '',
		password: '',
		confirm: '',
		role: ROLES.USER,
	};

	const registerSchema = Yup.object().shape({
		username: Yup.string()
			.min(6, 'Username too short')
			.max(12, 'Username too long')
			.required('Username is required'),
		email: Yup.string().email('Invalid email format').required('Email is required'),
		role: Yup.string()
			.oneOf([ROLES.USER, ROLES.ADMIN], 'You must select a role: user/admin')
			.required('Role is required'),
		password: Yup.string().min(8, 'Password too short').required('Password is required'),
		confirm: Yup.string()
			.when('password', {
				is: (value) => (value && value.length > 0 ? true : false),
				then: Yup.string().oneOf([Yup.ref('password')], 'Password must match!'),
			})
			.required('You must confirm the password'),
	});

	const submit = (values) => {
		alert('Register user');
	};

	return (
		<div>
			<h4>Register Formik</h4>
			<Formik
				//*** Initial values that the form will take */
				initialValues={initialValues}
				//*** Yup Validation Schema */
				validationSchema={registerSchema}
				//*** onSubmit Event */
				onSubmit={async (values) => {
					await new Promise((r) => setTimeout(r, 1000));
					alert(JSON.stringify(values, null, 2));
				}}
			>
				{({ values, touched, errors, isSubmitting, handleChange, handleBlur }) => (
					<Form>
						<label htmlFor="username">Username</label>
						<Field id="username" name="username" placeholder="Your username" type="text" />
						{/* Username Errors */}
						<ErrorMessage name="username" component="div" />

						<label htmlFor="email">Email</label>
						<Field id="email" name="email" placeholder="example@email.com" type="text" />
						{/* Email Errors */}
						<ErrorMessage name="email" component="div" />

						<label htmlFor="password">Password</label>
						<Field id="password" name="password" placeholder="password" type="password" />
						{/* Password Errors */}
						<ErrorMessage name="password" component="div" />

						<label htmlFor="confirm">Confirm password</label>
						<Field id="confirm" name="confirm" placeholder="Confirm password" type="password" />
						{/* Password Errors */}
						<ErrorMessage name="confirm" component="div" />

						<button type="submit">Submit</button>
						{isSubmitting ? <p>Register your credentials ... </p> : null}
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default RegisterFormik;
