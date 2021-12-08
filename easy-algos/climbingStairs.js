const climbStairs = ( n ) => {
  if ( n < 4 ) {
    return n
  }

  let firstSum = 2
  let secondSum = 3

  for ( let i = 4; i < n; i++ ) {
    // It is simply swapping two variables but choose this method for not using temp variable
    secondSum = firstSum + secondSum
    firstSum = secondSum - firstSum
  }

  return firstSum + secondSum
}