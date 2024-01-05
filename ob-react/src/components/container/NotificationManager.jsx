import React from 'react';
import NotificationForm from '../pure/forms/NotificationForm';
import axios from 'axios';

const NotificationManager = () => {
	const addNotification = (values) => {
		const { title, message } = values;
		axios
			.post('http://localhost:8000/custom-notification', {
				title,
				message,
			})
			.then((r) => console.log(r))
			.catch((e) => console.log(e));
	};

	return (
		<div className='card'>
			<div className='card-header p-3 mb-3'>
				<h1>Gestor Notificaciones</h1>
			</div>
			<div className='card-body'>
				<NotificationForm add={addNotification} />
			</div>
		</div>
	);
};

export default NotificationManager;
