import * as React from 'react'
import App from './App'
import './index.css'
import registerServiceWorker from './registerServiceWorker'
import { Provider } from 'react-redux'
// import { ConnectedRouter } from 'react-router-redux'

import {
	configureStore
	// history
} from './store'

import { render as ReactDOMRender } from 'react-dom'

const store = configureStore()

ReactDOMRender(
	<Provider store={store}>
		{/* <ConnectedRouter history={history}> */}
		<App />
		{/* </ConnectedRouter> */}
	</Provider>,
	document.getElementById('root') as HTMLElement
)
registerServiceWorker()
