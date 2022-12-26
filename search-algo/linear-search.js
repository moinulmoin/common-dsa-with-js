function linearSearch(arr, t) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === t) {
			return i;
		}
	}
	return -1;
}

//BigO = O(n)

console.log(linearSearch([-5, 2, 10, 4, 6], 10));
console.log(linearSearch([-5, 2, 10, 4, 6], 6));
console.log(linearSearch([-5, 2, 10, 4, 6], 20));
