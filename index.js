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

function myVoteFunction({ title, description , choices: choice }) {
    console.log(choice);


}

myVoteFunction(vote);
