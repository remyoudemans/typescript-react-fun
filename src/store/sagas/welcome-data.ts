import { takeEvery, put } from 'redux-saga/effects'
import { Welcome } from '../modules'
import { requestApi } from './request-api'

export function* getExampleStories() {
    // TODO: add env magic so these can be set in env variables

    // this is the one that works when using docker-compose
	// const exampleStories = yield requestApi('http://story-builder-back-end/example-story')
	const exampleStories = yield requestApi('http://localhost:3001/example-story')

	if (exampleStories && exampleStories.titles && exampleStories.titles.length) {
		yield put(Welcome.ActionCreators.successExampleStories(exampleStories))
	}
}

export default function* welcomeSagas() {
	yield takeEvery(
		Welcome.ActionNames.REQUEST_EXAMPLE_STORIES,
		getExampleStories
	)
}
