import { ActionNames, ActionTypes } from './actions'
import { defaultState, State } from './state'

export function reducer(
	state: State = defaultState,
	action: ActionTypes
): State {
	switch (action.type) {
		case ActionNames.REQUEST_EXAMPLE_STORIES:
			return {
				...state,
				isLoading: true
			}
		case ActionNames.SUCCESS_EXAMPLE_STORIES:
			return {
				...state,
				isLoading: false,
				exampleStories: action.payload
			}
		default:
			return state
	}
}
