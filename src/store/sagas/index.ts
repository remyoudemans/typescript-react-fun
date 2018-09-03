import welcomeSagas from './welcome-data'

import { spawn } from 'redux-saga/effects'

export default function* sagas() {
	yield spawn(welcomeSagas)
}
