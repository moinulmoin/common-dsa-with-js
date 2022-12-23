function isPrime(n) {
	if (n < 2) return false;

	for (let i = 2; i < n; i++) {
		if (n % i === 0) return false;
	}

	return true;
}
// Big-O = O(n)

function isPrime(n) {
	if (n < 2) return false;

	for (let i = 2; i <= Math.sqrt(n); i++) {
		if (n % i === 0) return false;
	}

	return true;
}
// Big-O = O(sqrt(n))

console.log(isPrime(1));
console.log(isPrime(5));
console.log(isPrime(4));
console.log(isPrime(7));
console.log(isPrime(17));
