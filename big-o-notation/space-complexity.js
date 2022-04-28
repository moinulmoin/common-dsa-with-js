// ? Space Complexity technically means auxiliary space complexity

// * Most primitives(booleans, numbers, undefined, null) are constant space.
// * Strings require O(n) space( where n is the length of the string.)
// * Reference types are generally O(n), where n is the length(for arrays) or the number of keys(for objects)

// Examples

// O(1) Space Complexity
function sum(arr){
    // Here total and i variable is constant space. no matter what number is passed in, the space is constant as they defined once.
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}

// O(n) Space Complexity
function double(arr){
    // Here newArr is O(n) because it's taking n space whenever it's pushing n elements from the given array'
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i] * 2);
    }
    return newArr;
}

