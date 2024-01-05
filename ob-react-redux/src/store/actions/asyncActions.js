export const API_CALL_REQUEST = 'API_CALL_REQUEST'; //Watcher Saga listeners
export const API_CALL_SUCCESS = 'API_CALL_SUCCESS'; //Dispatcher by Worker Saga
export const API_CALL_FAILURE = 'API_CALL_FAILURE'; //Dispatcher by Worker Saga

export const login = (email, password) => {
	return {
		type: API_CALL_REQUEST,
		payload: {
			request: {
				method: 'post',
				url: 'https://reqres.in/api/login',
				data: {
					email,
					password,
				},
			},
			okAction: API_CALL_SUCCESS,
			failAction: API_CALL_FAILURE,
		},
	};
};

/**
 *
 * @param {string} method
 * @param {string} url
 * @param {json} data
 * @returns Generic app request
 */
export const httpRequest = (method, url, data) => {
	return {
		type: API_CALL_REQUEST,
		payload: {
			request: {
				method,
				url,
				data,
			},
			okAction: API_CALL_SUCCESS,
			failAction: API_CALL_FAILURE,
		},
	};
};
