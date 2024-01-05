import React from 'react';

const AsyncExample = () => {
	async function generateNumber() {
		return 1;
	}

	async function generatePromiseNumber() {
		return Promise.resolve(2);
	}

	function obtainNumber() {
		generateNumber()
			.then((res) => alert(`Response: ${res}`))
			.catch((error) => alert(`Something went wrong: ${error}`));
	}
	function obtainPromiseNumber() {
		generatePromiseNumber()
			.then((res) => alert(`Response: ${res}`))
			.catch((error) => alert(`Something went wrong: ${error}`));
	}

	async function saveSessionStorage(key, value) {
		sessionStorage.setItem(key, value);

		return Promise.resolve(sessionStorage.getItem(key));
	}

	function showStorage() {
		saveSessionStorage('name', 'Juan Ginés')
			.then((res) => {
				let value = res;
				alert(`Saved Name: ${value}`);
			})
			.catch((error) => {
				alert(`Something went wrong: ${error}`);
			})
			.finally(() => alert('SUCCESS: Name saved and retreived'));
	}

	async function obtainMessage() {
		let promise = new Promise((res, rej) => {
			setTimeout(() => res('Hello World'), 2000);
		});

		let message = await promise;

		await alert(`Message received: ${message}`);
	}

	const returnError = async () => {
		await Promise.reject(new Error('Oooooops!'));
	};

	const consumeError = () => {
		returnError()
			.then((res) => alert(`Evericing is OK: ${res}`))
			.catch((error) => alert(`Something went wrong: ${error}`))
			.finally(() => alert('Finally executed'));
	};

	const urlNotFound = async () => {
		try {
			let response = await fetch('https://invalidURL.com');
			alert(`Response: ${JSON.stringify(response)}`);
		} catch (error) {
			alert(`Something went wrong whith your URL: ${error} (check your console)`);
		}
	};

	const multiplePromise = async () => {
		let results = await Promise.all([
			fetch('http://reqres.in/api/users'),
			fetch('http://reqres.in/api/users?page=2'),
		]).catch((error) =>
			alert(`Something went wrong whith your URL: ${error} (check your console)`)
		);
	};

	return (
		<div>
			<h1>Example async</h1>
			<button onClick={obtainNumber}>Obtain Number</button>
			<button onClick={obtainPromiseNumber}>Obtain Promise Number</button>
			<button onClick={showStorage}>Save Name and Show</button>
			<button onClick={obtainMessage}>Receive message in 2 sec</button>
			<button onClick={consumeError}>Return Error</button>
			<button onClick={urlNotFound}>Request to Uknow URL</button>
			<button onClick={multiplePromise}>Request multiple Promise</button>
		</div>
	);
};

export default AsyncExample;
