// Find the missing letter in the passed letter range and return it.
// If all letters are present in the range, return undefined.
// fearNotLetter( "abce" ) should return the string d.
// fearNotLetter( "abcdefghjklmno" ) should return the string i.
// fearNotLetter( "stvwx" ) should return the string u.
// fearNotLetter( "bcdf" ) should return the string e.
// fearNotLetter( "abcdefghijklmnopqrstuvwxyz" ) should return undefined.

function fearNotLetter ( str ) {

  for ( let i = 0; i < str.length; i++ ) {
    let code = str.charCodeAt( i )

    if ( code !== str.charCodeAt( 0 ) + i ) {
      return String.fromCharCode( code - 1 )
    }
  }

  return undefined
}

fearNotLetter( "abce" ) // => d