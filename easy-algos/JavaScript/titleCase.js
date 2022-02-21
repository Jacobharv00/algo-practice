function titleCase ( str ) {
  // take string and lowercase it all and put into an array of individual words
  const stringArray = str.toLowerCase().split( ' ' )

  // map over array and for each string replace the first character with a capitalized version.
  const newString = stringArray.map( string => {
    return string.replace( string.charAt( 0 ), string.charAt( 0 ).toUpperCase() )
  } )

  // return new string converted from array into single string
  return newString.join( ' ' )
}

titleCase( "I'm a little tea pot" ) // => I'm A Little Tea Pot