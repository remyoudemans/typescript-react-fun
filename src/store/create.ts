// import { reduxBatch } from '@manaflair/redux-batch'
import { DevTools } from '../utils'
import { routerMiddleware } from 'react-router-redux'
import {
	applyMiddleware,
	compose,
	createStore,
	Store,
	StoreEnhancerStoreCreator
} from 'redux'
import { createLogger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import { history } from './history'
import { Root } from './modules'
import Sagas from './sagas'

export function configureStore(): Store<Root.State> {
	const sagaMiddleware = createSagaMiddleware()
	const middlewares = [
		routerMiddleware(history),
		sagaMiddleware,
		createLogger({ collapsed: true })
	]
	const args = [
		// reduxBatch,
		applyMiddleware(...middlewares),
		// reduxBatch,
        ...(DevTools && typeof DevTools.instrument === 'function' && [DevTools.instrument()] || [])
		
	]
	const store = createStore(
		Root.reducer,
		compose<StoreEnhancerStoreCreator<Root.State>>(...args)
	)

	/**
	 * Run the redux saga
	 */
	sagaMiddleware.run(Sagas)

	/**
	 * Enable hot reloading of reducers
	 */
	// if (isDev) {
	//     if (module.hot) {
	//         module.hot.accept('./modules/_root', () => {
	//             store.replaceReducer(Root.reducer)
	//         })
	//     }
	// }

	return store
}
