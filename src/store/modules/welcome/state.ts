export interface Stories {
	titles: string[]
	chapters: string[]
}

export interface State {
	titles: string[]
	chapters: string[]
	isLoading: boolean
	exampleStories: Stories
}

export const defaultState: State = {
	titles: [],
	chapters: [],
	isLoading: false,
	exampleStories: {
		titles: [],
		chapters: []
	}
}
