import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button, TextField } from '@mui/material';

const NotificationForm = ({ add }) => {
	const initialValues = {
		title: '',
		message: '',
	};

	const registerSchema = Yup.object().shape({
		title: Yup.string()
			.min(3, 'Título demasiado corto')
			.max(25, 'Título demasiado largo')
			.required('Título obligatorio'),
		message: Yup.string()
			.min(10, 'Mensaje demasiado corto')
			.max(100, 'Mensaje demasiado largo')
			.required('Mensaje obligatorio'),
	});

	const formik = useFormik({
		initialValues: initialValues,
		validationSchema: registerSchema,
		onSubmit: (values, { setSubmitting }) => {
			add(values);
			formik.handleReset();
			setSubmitting(false);
		},
	});

	return (
		<form
			onSubmit={formik.handleSubmit}
			className='d-flex justify-content-center align-items-center mb-4'
		>
			<div className='form-outline flex-fill'>
				<div className='mb-3'>
					<TextField
            fullWidth
						id='title'
						name='title'
						label='Título*'
						value={formik.values.title}
						onChange={formik.handleChange}
						error={formik.touched.title && Boolean(formik.errors.title)}
						helperText={formik.touched.title && formik.errors.title}
					/>
				</div>
				<div className='mb-3'>
					<TextField
            fullWidth
						id='message'
						name='message'
						label='Mensaje*'
						multiline
						rows={4}
						maxRows={10}
						value={formik.values.message}
						onChange={formik.handleChange}
						error={formik.touched.message && Boolean(formik.errors.message)}
						helperText={formik.touched.message && formik.errors.message}
					/>
				</div>

				<div className='mb-3'>
					<Button
						color='success'
						type='submit'
						variant='contained'
						disabled={formik.isSubmitting}
					>
						Submit
					</Button>
				</div>
				{formik.isSubmitting ? <p>Mandando notificación ... </p> : null}
			</div>
		</form>
	);
};

export default NotificationForm;
