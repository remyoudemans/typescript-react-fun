import { State as WelcomeState } from '../welcome'
import { RouterState } from 'react-router-redux'

export interface State {
	router: RouterState
	welcome: WelcomeState
}
