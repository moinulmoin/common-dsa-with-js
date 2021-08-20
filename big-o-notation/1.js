// ? BIG O Notation

// * An algorithm is O(f(n)) if the number of simple operations the computer has to do is eventually less than a constant times f(n), n increases.

// * f(n) could be linear (f(n) = n)
// * f(n) could be quadratic (f(n) = n^2)
// * f(n) could be constant (f(n) = 1)
// * f(n) could be something entirely different


function addUpToFirstOne(n) {
  let total = 0;

//  * It's O(n) because the number of computations is directly proportional to the size of the input(n).
//  * It's a linear function because it's a loop that runs n times.

  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

function addUpToFirstTwo(n) {

// * It's O(1) because the number of computations is always the same (3 here)
// * It's a constant function because it runs 1 time.
    return n * (n + 1) / 2;
}

function printAllPairs(n){

// * It's O(n^2) because the number of computations is directly proportional to the size of the input(n).
// * It's a quadratic function because it's a loop that runs n*n times.

// * O(n) is inside another O(n) that's why it's O(n^2)

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      console.log(i, j);
    }
  }
}

