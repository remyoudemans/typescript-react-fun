import { routerReducer as router } from 'react-router-redux'
import { combineReducers } from 'redux'
import { reducer as welcome } from '../welcome'

import { State } from './state'

export const reducer = combineReducers<State>({
	router,
	welcome
})
