// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both.In other words, return the symmetric difference of the two arrays.

//   Note: You can return the array with its elements in any order.

function diffArray ( arr1, arr2 ) {
  const newArr = [ ...arr1, ...arr2 ]

  return newArr.filter( item => !arr1.includes( item ) || !arr2.includes( item ) )
}

diffArray( [ 1, 2, 3, 5 ], [ 1, 2, 3, 4, 5 ] ) // => [4]

// diffArray([ 1, "calf", 3, "piglet" ], [ 7, "filly" ]) => [1, "calf", 3, "piglet", 7, "filly"]