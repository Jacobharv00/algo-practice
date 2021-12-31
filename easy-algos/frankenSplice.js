// You are given two arrays and an index.

// Copy each element of the first array into the second array, in order.

// Begin inserting elements at index n of the second array.

// Return the resulting array.The input arrays should remain the same after the function runs.

// First approach
// function frankenSplice(arr1, arr2, n) {
//   // make a copy of arr2
//   let newArr = [...arr2]

//   // loop over arr1
//   for (let i = 0; i < arr1.length; i++) {
//     newArr.splice(n, 0, arr1[i])
//     n++
//   }

//   return newArr
// }
// frankenSplice( [ 1, 2, 3 ], [ 4, 5 ], 1 ) // => [4, 1, 2, 3, 5]

// refactored approach 
function frankenSplice ( arr1, arr2, n ) {
  let copyArr = [ ...arr2 ]

  copyArr.splice( n, 0, ...arr1 )

  return copyArr
}

frankenSplice( [ 1, 2, 3 ], [ 4, 5 ], 1 ) // => [4, 1, 2, 3, 5]

// Notes
// n = index
// I need to copy each element from the first array into the second array in order
// Start inserting elements into the second array at n index of arr2
// return second array
// array inputs remain the same after the function is invoked

// So I need to loop over first array
// Insert elements into copied array at n index
// return copied array 

