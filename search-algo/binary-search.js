function binarySearch(arr, t) {
	let leftIndex = 0;
	let rightIndex = arr.length - 1;

	while (leftIndex <= rightIndex) {
		let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

		if (arr[middleIndex] === t) return middleIndex;

		if (arr[middleIndex] > t) {
			rightIndex = middleIndex - 1;
		} else {
			leftIndex = middleIndex + 1;
		}
	}

	return -1;
}

// BigO = O(log(n))

console.log(binarySearch([-5, 2, 4, 6, 10], 10));
console.log(binarySearch([-5, 2, 4, 6, 10], 6));
console.log(binarySearch([-5, 2, 4, 6, 10], 20));
console.log(binarySearch([-5, 2, 4, 6, 10, 13, 15, 19], 13));
