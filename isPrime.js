function isPrime(number) {
  // check if number is less than 2 (not a prime number)
  if (number < 2) {
    return false;
  }

  // loop from 2 to square root of number
  for (let i = 2; i <= Math.sqrt(number); i++) {
    // if number is divisible by i, it is not a prime number
    if (number % i === 0) {
      return false;
    }
  }

  // if we reach this point, number is a prime number
  return true;
}

function nextPrime(number) {
  // initialize next to the input number plus 1
  let next = number + 1;

  // loop until the next number is prime
  while (!isPrime(next)) {
    // increment next by 1 until it is prime
    next++;
  }

  // return the next prime number
  return next;
}

function primeDifference(number) {
  if (!isPrime(number)) {
    // check if the number given is prime or not
    return 0;
  }

  // find the next prime number after the input number
  const next = nextPrime(number);

  // return the difference between the next prime number and the input number
  return next - number;
}

// example usage
console.log(primeDifference(17)); // 2, since the next prime number after 17 is 19 (19 - 17 = 2)
console.log(primeDifference(24)); // 0, since 24 is not prime
console.log(primeDifference(23)); // 6, since the next prime number after 23 is 29 (29 - 23 = 6)
console.log(primeDifference(1)); // 0, since 1 is not prime
