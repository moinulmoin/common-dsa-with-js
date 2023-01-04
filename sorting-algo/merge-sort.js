function mergeSort(arr) {
	if (arr.length < 2) return arr;
	const middle = Math.floor(arr.length / 2);
	let leftArr = arr.slice(0, middle);
	let rightArr = arr.slice(middle);

	return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(leftArr, rightArr) {
	const sortedArr = [];
	while (leftArr.length && rightArr.length) {
		if (leftArr[0] <= rightArr[0]) {
			sortedArr.push(leftArr.shift());
		} else {
			sortedArr.push(rightArr.shift());
		}
	}

	return [...sortedArr, ...leftArr, ...rightArr];
}

// BigO - O(nlogn)

function reverseMergeSort(arr) {
	if (arr.length < 2) return arr;
	const middle = Math.floor(arr.length / 2);
	let leftArr = arr.slice(0, middle);
	let rightArr = arr.slice(middle);

	return reverseMerge(reverseMergeSort(leftArr), reverseMergeSort(rightArr));
}

function reverseMerge(leftArr, rightArr) {
	const sortedArr = [];
	while (leftArr.length && rightArr.length) {
		if (leftArr[0] >= rightArr[0]) {
			sortedArr.push(leftArr.shift());
		} else {
			sortedArr.push(rightArr.shift());
		}
	}

	return [...sortedArr, ...leftArr, ...rightArr];
}

const arr1 = [-6, 20, 8, -2, 4];
const arr2 = [16, 20, 8, -22, 40];
const arr3 = [-6, 20, 8, -2, 4];
const arr4 = [16, 20, 8, -22, 40];

console.log(mergeSort(arr1));
console.log(mergeSort(arr2));
console.log(reverseMergeSort(arr3));
console.log(reverseMergeSort(arr4));
