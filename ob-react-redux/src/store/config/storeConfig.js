import { compose, legacy_createStore as createStore, applyMiddleware } from 'redux';
import createSagaMiddelware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from '../reducers/rootReducer';
import { watcherSaga } from '../sagas/sagas';

export const createAppStore = () => {
	let store = createStore(rootReducer, composeWithDevTools());
	return store;
};

export const createAppAsyncStore = () => {
	const sagaMiddelware = createSagaMiddelware();

	let store = createStore(
		rootReducer,
		compose(applyMiddleware(sagaMiddelware), composeWithDevTools())
	);

	// We init the Watcher SAga
	sagaMiddelware.run(watcherSaga);
	return store;
};
