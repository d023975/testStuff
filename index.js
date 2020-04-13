import Person from './Person';
import Programmer from './Programmer';

import { stuff } from './Person';
import { stuff as differentFunction, moreStuff as anotherFunction } from './Person';
import * as everything from './Person';

const array1 = [ 1, 2, 3, 4 ];
const reducer = (accumulator, currentValue) => {
	return accumulator + currentValue; // If no initialValue is supplied, the first element in the array will be used as the initial accumulator value and skipped as currentValue.
};

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 0));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
//console.log(array1.reduce(reducer, 5));
// expected output: 15
const vote = {
	title: 'How is your day?',
	description: 'Tell me: how has your day been so far?',
	choices: [
		{ id: 'choice_1', title: 'Good', count: 7 },
		{ id: 'choice_2', title: 'Bad', count: 12 },
		{ id: 'choice_3', title: 'Not sure yet', count: 1 }
	]
};

function myVoteFunction({ title, description, choices: choice }) {
	console.log(choice);
}

myVoteFunction(vote);

function f1() {
	'use strict';
	return this;
}
// In Node:
console.log(f1() === global); // true without strict

console.log(f1.apply(global) === global); // true with strict
console.log(f1.call(global) === global); // true with strict

console.log((() => this === global)());

console.log(Math.max.apply(this, [ 1, 3, 3, 43, 34, 334, 3, 3, 4 ]));

function sum(x, y, z) {
	return x + y + z;
}

let arr = [ 1, 2, 3, 4, 5, 6 ];

console.log(sum(...arr));

// Block scope
{
	let b = 1;
	console.log('b has only local scope and no hoisting');
}

//Template Strings
// Use expressions and var in Strings
{
	const name = 'Hugo';

	console.log(`My name is ${name}`);
	console.log(`I am ${12 * 356} days old`);
}

// Destructuring  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

//Classes
{
	class Person {
		constructor(name) {
			this.name = name;
		}
		getName() {
			return this.name;
		}
	}

	const carlos = new Person('Carlos');
	carlos.getName();
}
//Classes read only props
{
	class Person {
		constructor(name) {
			this._name = name;
		}
		get name() {
			return this._name;
		}
	}

	const carlos = new Person('Carlos');
	console.log(carlos.name);

	//Inheritance
	class Programmer extends Person {
		constructor(name, language) {
			super(name);
			this.language = language;
		}
		get name() {
			return `Programmer ${super.name}`;
		}
		code() {
			return `${this.name} codes in ${this.language}`;
		}
	}

	const peter = new Programmer('Peter', 'Java');
	console.log(peter.name);
	console.log(peter.code());
}
{
	//Extended object literals
	let name = `CarlosCP`;
	const person = {
		name,
		toString() {
			return this.name;
		}
	};
	console.log(person.name);
}

const importedPerson = new Person('CalosCP');
console.log(importedPerson.name);

const importedProgrammer = new Programmer('Carlos', 'JavaScript');
console.log(importedProgrammer.name);

stuff(); // imported function
differentFunction(); // stuff function but different name
anotherFunction(); // see imports above
everything.moreStuff(); // see imports above
everything.stuff(); // see imports above

{
	// arrow functions
	const func1 = (par) => par;
	const func2 = (par) => {
		par;
	};
	const func3 = (par = 'DEFAULT') => {
		par;
		return par;
	};
	console.log(func1('test'));
	console.log(func2('test')); //undefined
	console.log(func3('test'));
	console.log(func3());
}
{
	//default and rest params
	// see also "DEFAULT"  above

	const func = (a, ...others) => {
		console.log(a);
		others.forEach((el) => console.log(el));
	};
	func('a', 'b', 'c');
}
{
	// spread operator  // does not work with node v12.13.1 , to ensure I extra copied from 
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
	const obj1 = { foo: 'bar', x: 42 };
	const obj2 = { foo: 'baz', y: 13 };

	const clonedObj = { ...obj1 };
	// Object { foo: "bar", x: 42 }

	const mergedObj = { ...obj1, ...obj2 };
	// Object { foo: "baz", x: 42, y: 13 }

	console.log(clonedObj);
}
