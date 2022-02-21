// Remove all falsy values from an array.
//Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
//Hint: Try converting each value to a Boolean.

// 1st way
// function bouncer(arr) {
//   let newArray = []

//   for (let i = 0; i < arr.length; i++) {
//          TRUE     
//     if (arr[i]) {
//       newArray.push(arr[i])
//     } 
//   }
//   return newArray
// }

// Refactored way
const bouncer = ( arr ) => {
  return arr.filter( Boolean )
}


bouncer( [ 7, "ate", "", false, 9 ] ) // => [7, 'ate', 9]

// Notes
// I have an array of strings and booleans and numbers
// I need to remove all Falsy values from array and return array
// Falsy values are false, null, 0, "", undefined, and NaN.
// Can I convert each value to a Boolean?
// If all values in array are false still return an empty array
// I could make an empty array
// I can loop over arr and check each elements value
// if the element at that index is true. Push into new array then return that newArray