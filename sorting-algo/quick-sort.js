// pick a pivot
// smallers than pivot in left arr
// greaters than pivot in right arr
// concatenate the arrays

function quickSort(arr) {
	if (arr.length < 2) {
		return arr;
	}

	let pivot = arr[arr.length - 1];
	let left = [];
	let right = [];

	for (let i = 0; i < arr.length - 1; i++) {
		if (arr[i] < pivot) {
			left.push(arr[i]);
		} else {
			right.push(arr[i]);
		}
	}

	return [...quickSort(left), pivot, ...quickSort(right)];
}

const arr1 = [-6, 20, 8, -2, 4];
const arr2 = [16, 20, 8, -22, 40];

console.log(quickSort(arr1));
console.log(quickSort(arr2));

function reverseQuickSort(arr) {
	if (arr.length < 2) {
		return arr;
	}

	let pivot = arr[arr.length - 1];
	let left = [];
	let right = [];

	for (let i = 0; i < arr.length - 1; i++) {
		if (arr[i] < pivot) {
			left.push(arr[i]);
		} else {
			right.push(arr[i]);
		}
	}

	return [...reverseQuickSort(right), pivot, ...reverseQuickSort(left)];
}

const arr3 = [-6, 20, 8, -2, 4];
const arr4 = [16, 20, 8, -22, 40];

console.log(reverseQuickSort(arr3));
console.log(reverseQuickSort(arr4));

// Worst Case - O(n^2) when sorting a sorted array
// Avg Case - O(nlogn) when sorting a unsorted array
