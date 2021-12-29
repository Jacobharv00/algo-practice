function twoStrings ( s1, s2 ) {
  let map = {}

  for ( let i = 0; i < s1.length; i++ ) {
    map[ s1[ i ] ] = true
  }

  for ( let i = 0; i < s2.length; i++ ) {
    if ( map[ s2[ i ] ] ) {
      return 'YES'
    }
  }
  return 'NO'
}

// Given two strings, determine if they share a common substring. A substring may be as small as one character.
// For each pair of strings return either 'YES' or 'NO'

//  String1    String2
// 'hello'    'world'
// should return 'YES'

//  String1    String2
// 'hi'    'world'
// should return 'NO'