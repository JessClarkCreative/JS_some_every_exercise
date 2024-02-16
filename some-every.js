// Returns true if the array contains at least ONE odd number, otherwise returns false.
// Utilizes the some() method and an arrow function as the callback for some.
function hasOddNumber(arr) {
    return arr.some(num => num % 2 !== 0);
  }
  
  // Returns true if the number contains at least one zero, otherwise returns false.
  // Converts the number to a string, then uses the split() and some() methods to check if any digit is '0'.
  function hasAZero(num) {
    return num.toString().split('').some(digit => digit === '0');
  }
  
  // Returns true if EVERY number in the array is odd, otherwise returns false.
  // Utilizes the every() method.
  function hasOnlyOddNumbers(arr) {
    return arr.every(num => num % 2 !== 0);
  }
  
  // Returns true if there are NO DUPLICATE VALUES in the array, otherwise returns false.
  // Utilizes the every() method in combination with indexOf() to check if every element is unique.
  function hasNoDuplicates(arr) {
    return arr.every((value, index, array) => array.indexOf(value) === index);
  }
  
  // Returns true if EVERY OBJECT in the array contains a certain key, otherwise returns false.
  function hasCertainKey(arr, key) {
    return arr.every(obj => key in obj);
  }
  
  // Returns true if every object in the array contains a specific value for a given key, otherwise returns false.
  // Utilizes the every() method to check if every object in the array has the specified value for the given key.
  function hasCertainValue(arr, key, searchValue) {
    return arr.every(obj => obj[key] === searchValue);
  }
  