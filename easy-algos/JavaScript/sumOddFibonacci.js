function sumFibs ( num ) {
  let currentNum = 1
  let previousNum = 0
  let oddSum = 0

  while ( currentNum <= num ) {
    if ( currentNum % 2 !== 0 ) {
      oddSum += currentNum
    }
    currentNum += previousNum
    previousNum = currentNum - previousNum
  }
  return oddSum
}
sumFibs( 4 ) // => 5

// sumFibs( 1 ) => a number.

// sumFibs( 1000 ) => 1785.

// sumFibs( 4000000 ) => 4613732.

// sumFibs( 4 ) => 5.

// sumFibs( 75024 ) => 60696.

// sumFibs( 75025 ) => 135721.