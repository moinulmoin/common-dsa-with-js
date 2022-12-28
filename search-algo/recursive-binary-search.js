function recursiveBinarySearch(arr, t) {
	return search(arr, t, 0, arr.length - 1);
}

function search(arr, t, leftIndex, rightIndex) {
	if (leftIndex > rightIndex) return -1;

	let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

	if (arr[middleIndex] === t) return middleIndex;

	if (arr[middleIndex] > t) {
		return search(arr, t, leftIndex, middleIndex - 1);
	} else {
		return search(arr, t, middleIndex + 1, rightIndex);
	}
}

// BigO - O(log(n))

console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 10));
console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 6));
console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 20));
console.log(recursiveBinarySearch([-5, 2, 4, 6, 10, 13, 15, 19], 13));
