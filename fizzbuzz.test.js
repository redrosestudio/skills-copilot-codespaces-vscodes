const assert = require('assert');
const fizzBuzz = require('./fizzbuzz');

// Test cases
function runTests() {
  console.log('Running FizzBuzz tests...\n');

  // Test numbers divisible by 3
  assert.strictEqual(fizzBuzz(3), 'Fizz', 'Test failed: 3 should return Fizz');
  console.log('✓ fizzBuzz(3) = Fizz');

  // Test numbers divisible by 5
  assert.strictEqual(fizzBuzz(5), 'Buzz', 'Test failed: 5 should return Buzz');
  console.log('✓ fizzBuzz(5) = Buzz');

  // Test numbers divisible by both 3 and 5
  assert.strictEqual(fizzBuzz(15), 'FizzBuzz', 'Test failed: 15 should return FizzBuzz');
  console.log('✓ fizzBuzz(15) = FizzBuzz');

  // Test regular numbers
  assert.strictEqual(fizzBuzz(1), 1, 'Test failed: 1 should return 1');
  console.log('✓ fizzBuzz(1) = 1');

  assert.strictEqual(fizzBuzz(2), 2, 'Test failed: 2 should return 2');
  console.log('✓ fizzBuzz(2) = 2');

  // Test more cases
  assert.strictEqual(fizzBuzz(9), 'Fizz', 'Test failed: 9 should return Fizz');
  console.log('✓ fizzBuzz(9) = Fizz');

  assert.strictEqual(fizzBuzz(10), 'Buzz', 'Test failed: 10 should return Buzz');
  console.log('✓ fizzBuzz(10) = Buzz');

  assert.strictEqual(fizzBuzz(30), 'FizzBuzz', 'Test failed: 30 should return FizzBuzz');
  console.log('✓ fizzBuzz(30) = FizzBuzz');

  console.log('\n✅ All tests passed!');
}

runTests();
