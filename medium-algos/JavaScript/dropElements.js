// Drop it

// Given the array arr, iterate through and remove each element starting from the first element( the 0 index ) until the function func returns true when the iterated element is passed through it.

// Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.

function dropElements ( arr, func ) {
  while ( arr.length > 0 && !func( arr[ 0 ] ) ) {
    arr.shift()
  }
  return arr
}

// Alternate Way

// function dropElements(arr, func) {
//   let originalLength = arr.length

//   for (let i = 0; i < originalLength; i++) {
//     if (func(arr[0])) {
//       break;
//     } else {
//       arr.shift()
//     }
//   }
//   return arr
// }

dropElements( [ 1, 2, 3, 4 ], function ( n ) { return n >= 3 } ) // => [ 3, 4 ]

//dropElements( [ 0, 1, 0, 1 ], function ( n ) { return n === 1 } ) // => [ 1, 0, 1 ]

//dropElements( [ 1, 2, 3 ], function ( n ) { return n > 0 } ) // => [ 1, 2, 3 ]

//dropElements( [ 1, 2, 3, 4 ], function ( n ) { return n > 5 } ) // => []

//dropElements( [ 1, 2, 3, 7, 4 ], function ( n ) { return n > 3 } ) // => [ 7, 4 ]

//dropElements( [ 1, 2, 3, 9, 2 ], function ( n ) { return n > 2 } ) // => [ 3, 9, 2 ]