export const isDefined = (element: any) => typeof element !== 'undefined'

export const simpleLog = (object: { [key: string]: any }) => {
	const key = Object.keys(object)[0]
	console.log(`${key}: ${object[key]}`)
}
