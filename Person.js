export default class Person {
	constructor(name) {
		this._name = name;
	}
	get name() {
		return this._name;
	}
}

export function stuff() {
	console.log('stuff');
}

export function moreStuff() {
	console.log('stuff');
}
