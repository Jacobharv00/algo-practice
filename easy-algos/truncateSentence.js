/*
  @param {string} s
  @param {number} k
  @return {string}
*/

const truncateSentence = ( s, k ) => {

  let wordsArr = s.split( ' ' )

  let truncArr = []

  for ( let i = 0; i < k; i++ ) {
    truncArr.push( wordsArr[ i ] )
  }

  return truncArr.toString().replace( /,/g, " " )

}

/*

const truncateSentence = (s, k) => {
    s = s.split(" ")

    s.length = k

    return s.join(" ")
}

const truncateString = ( str, num ) =>  {
  if ( str.length <= num ) return str

  // Return str truncated with '...' concatenated to the end of str.
  return str.slice( 0, num ) + '...'
}

*/