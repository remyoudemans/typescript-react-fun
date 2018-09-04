export function* requestApi(request: string) {
	const response = yield fetch(request, {
		mode: 'cors'
	})

	if (response.status !== 200) {
		console.warn(
			`Looks like there was a problem. Status Code: ${response.status}`
		)
		return
	}

	const data = yield response.json()

	return data
}
