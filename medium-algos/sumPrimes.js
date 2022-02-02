function sumPrimes ( num ) {
  let sum = 0
  for ( let i = 0; i <= num; i++ ) {
    if ( isPrime( i ) ) {
      sum += i
    }
  }
  return sum
}

// Helper function
function isPrime ( num ) {
  if ( num < 2 ) return false

  for ( let i = 2; i < num; i++ ) {
    if ( num % i == 0 ) return false
  }
  return true
}

sumPrimes( 10 ) // => 17
//sumPrimes(977)

// Second Solution
// function sumPrimes(num) {
//   let primes = [];
//   for (let i = 2; i <= num; i++) {
//     if (primes.every((prime) => i % prime !== 0))
//       primes.push(i);
//   }
//   return primes.reduce((sum, prime) => sum + prime, 0);
// }