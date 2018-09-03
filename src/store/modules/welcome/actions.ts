import {
	// Action,
	createActionCreator,
	// PayloadAction,
	PureAction,
	PayloadAction
} from 'typed-redux-kit'
import { Stories } from '.'

export enum ActionNames {
	REQUEST_EXAMPLE_STORIES = 'welcome/REQUEST_EXAMPLE_STORIES',
	SUCCESS_EXAMPLE_STORIES = 'welcome/SUCCESS_EXAMPLE_STORIES'
}

// tslint:disable-next-line:no-namespace
export namespace Actions {
	export interface RequestExampleStories
		extends PureAction<ActionNames.REQUEST_EXAMPLE_STORIES> {}
	export interface SuccessExampleStories
		extends PayloadAction<ActionNames.SUCCESS_EXAMPLE_STORIES, Stories> {}
}

export type ActionTypes =
	| Actions.RequestExampleStories
	| Actions.SuccessExampleStories

export const ActionCreators = {
	requestExampleStories: createActionCreator<Actions.RequestExampleStories>(
		ActionNames.REQUEST_EXAMPLE_STORIES
	),
	successExampleStories: createActionCreator<Actions.SuccessExampleStories>(
		ActionNames.SUCCESS_EXAMPLE_STORIES
	)
}
