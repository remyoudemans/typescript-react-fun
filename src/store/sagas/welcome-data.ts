import { takeEvery, put } from 'redux-saga/effects'
import { Welcome } from '../modules'
import { requestApi } from './request-api'

export function* getExampleStories() {
	const exampleStories = yield requestApi('http://story-builder-back-end/example-story')

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
