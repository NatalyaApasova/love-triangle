/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let counter = 0;
	for (i = 0; i <= preferences.length; i++) {
		let first = preferences[i];
		let second = preferences[first - 1];
		let third = preferences[second - 1];

		if (third === i + 1 && first != preferences[first - 1] && second != preferences[second - 1] && third != preferences[third - 1]) {
			counter = counter + 1;
		}
		
	}
	return counter/3;
};
