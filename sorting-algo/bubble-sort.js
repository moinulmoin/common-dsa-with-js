function bubbleSort(arr) {
	let swapped;

	do {
		swapped = false;
		for (let i = 0; i < arr.length - 1; i++) {
			if (arr[i] > arr[i + 1]) {
				let temp = arr[i];
				arr[i] = arr[i + 1];
				arr[i + 1] = temp;
				swapped = true;
			}
		}
	} while (swapped);
}

const arr1 = [-6, 20, 8, -2, 4];
const arr2 = [16, 20, 8, -22, 40];

bubbleSort(arr1);
bubbleSort(arr2);

console.log(arr1, arr2);

//BigO = O(n^2)

function reverseBubbleSort(arr) {
	let swapped;

	do {
		swapped = false;
		for (let i = 0; i < arr.length - 1; i++) {
			if (arr[i] < arr[i + 1]) {
				let temp = arr[i];
				arr[i] = arr[i + 1];
				arr[i + 1] = temp;
				swapped = true;
			}
		}
	} while (swapped);
}

const arr3 = [-6, 20, 8, -2, 4];
const arr4 = [16, 20, 8, -22, 40];

reverseBubbleSort(arr3);
reverseBubbleSort(arr4);

console.log(arr3, arr4);
