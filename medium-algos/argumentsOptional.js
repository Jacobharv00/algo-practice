function addTogether () {
  const [ first, second ] = arguments

  if ( typeof first !== 'number' ) return undefined

  if ( second === undefined ) return ( second ) => addTogether( first, second )

  if ( typeof second !== 'number' ) return undefined

  return first + second
}

addTogether( 2, 3 )

// Cases
//addTogether(23, 30) // => 53.

//addTogether(5)(7) // => 12.

//addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ") // => undefined.

//addTogether(2, "3") // => undefined.

//addTogether(2)([3]) // => undefined.

// Notes
// It has to add two numbers passed as parameters and return the sum.
// It has to check if any of the numbers are actual numbers, otherwise return undefined and stop the program right there.
// It has to check if it has one or two arguments passed. More are ignored.
// If it has only one argument then it has to return a function that uses that number and expects another one, to then add it.

// Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

// For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

// Calling this returned function with a single argument will then return the sum:

// var sumTwoAnd = addTogether(2);
// sumTwoAnd(3) returns 5.

// If either argument isn't a valid number, return undefined.
