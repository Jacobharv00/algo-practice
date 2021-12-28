// Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method

function repeatStringNumTimes ( str, num ) {
  let newString = ''

  while ( num > 0 ) {
    newString += str
    num--
  }

  return newString
}

repeatStringNumTimes( "abc", 3 ) // => 'abcabcabc'

// repeatStringNumTimes("*", 8) => '********'
// repeatStringNumTimes("abc", -2) => ''
// repeatStringNumTimes("abc", 0) => ''