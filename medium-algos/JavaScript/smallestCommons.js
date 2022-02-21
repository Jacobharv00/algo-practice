function smallestCommons ( arr ) {
  const [ min, max ] = arr.sort( ( a, b ) => a - b )
  const numberDivisors = max - min + 1
  let upperBound = 1

  for ( let i = min; i <= max; i++ ) {
    upperBound *= i
  }

  for ( let multiple = max; multiple <= upperBound; multiple += max ) {

    let divisorCount = 0
    for ( let i = min; i <= max; i++ ) {

      if ( multiple % i === 0 ) {
        divisorCount += 1
      }
    }
    if ( divisorCount === numberDivisors ) {
      return multiple
    }
  }
}

smallestCommons( [ 1, 5 ] ) // => a number

// smallestCommons( [ 1, 5 ] ) => a number.

// smallestCommons( [ 1, 5 ] ) => 60.

// smallestCommons( [ 5, 1 ] ) => 60.

// smallestCommons( [ 2, 10 ] ) => 2520.

// smallestCommons( [ 1, 13 ] ) => 360360.

// smallestCommons( [ 23, 18 ] ) => 6056820.