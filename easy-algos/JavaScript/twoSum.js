const twoSum = ( nums, target ) => {
  let result = []

  for ( var i = 0; i < nums.length; i++ ) {
    for ( var j = i + 1; j < nums.length; j++ ) {
      if ( nums[ i ] + nums[ j ] === target ) {
        result.push( i, j )
      }
    }
  }
  return result
}

// A faster Way using new Map()
const twoSum = ( nums, target ) => {
  const values = new Map()

  for ( let i = 0; i < nums.length; i++ ) {
    const targetSubtract = target - nums[ i ]
    const matchingValue = values.get( targetSubtract )

    console.log( targetSubtract )
    console.log( matchingValue )

    if ( matchingValue !== undefined ) {
      return [ matchingValue, i ]
    }
    values.set( nums[ i ], i )
  }
}

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:
// Input: nums = [ 2, 7, 11, 15 ], target = 9
// Output: [ 0, 1 ]
// Output: Because nums[ 0 ] + nums[ 1 ] == 9, we return [ 0, 1 ].

// Example 2:
// Input: nums = [ 3, 2, 4 ], target = 6
// Output: [ 1, 2 ]

// Example 3:
// Input: nums = [ 3, 3 ], target = 6
// Output: [ 0, 1 ]