function isPowerOfTwo1(n) {
	if (n < 1) return false;

	for (let i = 0; i < n; i++) {
		if (2 ** i === n) return true;
	}
	return false;
}

console.log(isPowerOfTwo1(1));
console.log(isPowerOfTwo1(2));
console.log(isPowerOfTwo1(5));
console.log(isPowerOfTwo1(6));
console.log(isPowerOfTwo1(8));

// Big-O = O(n)
console.log('\n');

function isPowerOfTwo2(n) {
	if (n < 1) return false;

	while (n > 1) {
		if (n % 2 !== 0) return false;
		n = n / 2;
	}
	return true;
}

console.log(isPowerOfTwo2(1));
console.log(isPowerOfTwo2(2));
console.log(isPowerOfTwo2(5));
console.log(isPowerOfTwo2(6));
console.log(isPowerOfTwo2(8));

// Big-O = O(log(n))
console.log('\n');

function isPowerOfTwoBitWise(n) {
	if (n < 1) return false;

	return (n & (n - 1)) === 0;
}

console.log(isPowerOfTwo2(1));
console.log(isPowerOfTwo2(2));
console.log(isPowerOfTwo2(5));
console.log(isPowerOfTwo2(6));
console.log(isPowerOfTwo2(8));

// Big-O = O(1)
