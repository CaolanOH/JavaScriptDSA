//   +=====================================================+
//   |                WRITE YOUR CODE HERE                 |
//   | Description:                                        |
//   | - This function finds the first non-repeating       |
//   |   character in a string.                            |
//   |                                                     |
//   | Return type: string/null                            |
//   | - Returns the first non-repeating character if      |
//   |   found, otherwise returns null.                    |
//   |                                                     |
//   | Tips:                                               |
//   | - You can use either a Map or an object to count    |
//   |   the occurrences of each character.                |
//   | - Example with Map:                                 |
//   |   charCounts.set(c, (charCounts.get(c) || 0) + 1);  |
//   | - Example with object:                              |
//   |   charCounts[c] = (charCounts[c] || 0) + 1;         |
//   +=====================================================+

// Using Map();
// function firstNonRepeatingChar(s) {
// 	const map = new Map();
// 	for (const c of s) {
// 		map.set(c, (map.get(c) || 0) + 1);
// 	}
// 	for (const [key, val] of map) {
// 		if (val === 1) {
// 			return key;
// 		}
// 	}
// 	return null;
// }

// using JavaScript obj {}
const firstNonRepeatingChar = (s) => {
	const obj = {};
	for (const c of s) {
		obj[c] = (obj[c] || 0) + 1;
	}
	for (const key in obj) {
		if (obj[key] === 1) {
			return key;
		}
	}
	return null;
};

// ---------------
// All Unique
// ---------------
console.log("All Unique:");
console.log("Input: 'abcde'");
console.log("Output: ", JSON.stringify(firstNonRepeatingChar("abcde")));
console.log("---------------");

// ---------------
// Some Duplicates
// ---------------
console.log("Some Duplicates:");
console.log("Input: 'aabbccdef'");
console.log("Output: ", JSON.stringify(firstNonRepeatingChar("aabbccdef")));
console.log("---------------");

// ---------------
// All Duplicates
// ---------------
console.log("All Duplicates:");
console.log("Input: 'aabbcc'");
console.log("Output: ", JSON.stringify(firstNonRepeatingChar("aabbcc")));
console.log("---------------");

// ---------------
// Empty String
// ---------------
console.log("Empty String:");
console.log("Input: ''");
console.log("Output: ", JSON.stringify(firstNonRepeatingChar("")));
console.log("---------------");

// ---------------
// Single Character
// ---------------
console.log("Single Character:");
console.log("Input: 'a'");
console.log("Output: ", JSON.stringify(firstNonRepeatingChar("a")));
console.log("---------------");

// ---------------
// Multiple Non-Repeating Chars
// ---------------
console.log("Multiple Non-Repeating Chars:");
console.log("Input: 'abcdaef'");
console.log("Output: ", JSON.stringify(firstNonRepeatingChar("abcdaef")));
console.log("---------------");
