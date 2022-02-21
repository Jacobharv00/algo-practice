function getIndexToIns ( arr, num ) {
  let sortedArr = arr.sort( ( a, b ) => a - b )
  //console.log(sortedArr)

  for ( let i = 0; i <= sortedArr.length; i++ ) {
    if ( sortedArr[ i ] >= num ) {
      return i
    }
  }
  return sortedArr.length
}

getIndexToIns( [ 10, 20, 30, 40, 50 ], 35 )

// Refactor
// function getIndexToIns(arr, num) {
//   return arr.filter(val => num > val).length;
// }

// Problem
// Return the lowest index at which a value( second argument ) should be inserted into an array( first argument ) once it has been sorted.The returned value should be a number.

// For example, getIndexToIns( [ 1, 2, 3, 4 ], 1.5 ) should return 1 because it is greater than 1( index 0 ), but less than 2( index 1 ).

//   Likewise, getIndexToIns( [ 20, 3, 5 ], 19 ) should return 2 because once the array has been sorted it will look like[ 3, 5, 20 ] and 19 is less than 20( index 2 ) and greater than 5( index 1 ).