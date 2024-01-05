import React from 'react';
import { withServiceWorkerUpdater } from '@3m1/service-worker-updater';

const UpdateServiceWorker = (props) => {
	const { newServiceWorkerDetected, onLoadNewServiceWorkerAccept } = props;
	return newServiceWorkerDetected ? (
		<div
			className='alert alert-danger'
			role='alert'
		>
			<h3>¡Nueva versión detectada!</h3>
			<button
				className='btn btn-primary'
				onClick={onLoadNewServiceWorkerAccept}
			>
				Actualizar
			</button>
		</div>
	) : null;
};

export default withServiceWorkerUpdater(UpdateServiceWorker);
