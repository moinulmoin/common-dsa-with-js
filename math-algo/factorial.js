function factorial(n) {
	let total = 1;
	for (let i = 2; i <= n; i++) {
		total = total * i;
	}
	return total;
}

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(4));
console.log(factorial(5));

//Big-O = O(n)
