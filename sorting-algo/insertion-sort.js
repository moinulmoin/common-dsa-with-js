function insertionSort(arr) {
	for (let i = 1; i < arr.length; i++) {
		let numberToInsert = arr[i];
		let sortedElementIndex = i - 1;
		while (
			sortedElementIndex >= 0 &&
			arr[sortedElementIndex] > numberToInsert
		) {
			arr[sortedElementIndex + 1] = arr[sortedElementIndex];
			sortedElementIndex = sortedElementIndex - 1;
		}
		arr[sortedElementIndex + 1] = numberToInsert;
	}

	return arr;
}

// BigO - (O(n^2))

function reverseInsertionSort(arr) {
	for (let i = 1; i < arr.length; i++) {
		let numberToInsert = arr[i];
		let sortedElementIndex = i - 1;
		while (
			sortedElementIndex >= 0 &&
			arr[sortedElementIndex] < numberToInsert
		) {
			arr[sortedElementIndex + 1] = arr[sortedElementIndex];
			sortedElementIndex = sortedElementIndex - 1;
		}
		arr[sortedElementIndex + 1] = numberToInsert;
	}

	return arr;
}

const arr1 = [-6, 20, 8, -2, 4];
const arr2 = [16, 20, 8, -22, 40];
const arr3 = [-6, 20, 8, -2, 4];
const arr4 = [16, 20, 8, -22, 40];

insertionSort(arr1);
insertionSort(arr2);
reverseInsertionSort(arr3);
reverseInsertionSort(arr4);

console.log(arr1, arr2);
console.log(arr3, arr4);
