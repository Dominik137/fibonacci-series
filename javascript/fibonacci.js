function fibonacci(num) {
  // Base cases
  if (num === 0) return 0;
  if (num === 1) return 1;

  // Recursive calculation
  return fibonacci(num - 1) + fibonacci(num - 2);
}

// Test cases
console.log(fibonacci(0)); // Output: 0
console.log(fibonacci(2)); // Output: 1
console.log(fibonacci(10)); // Output: 55

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution
