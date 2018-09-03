import { takeEvery, put } from 'redux-saga/effects'
import { Welcome } from '../modules'

export function* getExampleStories() {
	const response = yield fetch('http://localhost:3001/example-story', {
		mode: 'cors'
	})
	const exampleStories = yield response.json()

	if (exampleStories && exampleStories.titles.length) {
		yield put(Welcome.ActionCreators.successExampleStories(exampleStories))
	}
}

export default function* welcomeSagas() {
	yield takeEvery(
		Welcome.ActionNames.REQUEST_EXAMPLE_STORIES,
		getExampleStories
	)
}
