const combine = ( arr ) => {
  let sortedArr = [ ...arr ].sort( function ( a, b ) {
    return b.length - a.length
  } )

  let longestWordLength = sortedArr[ 0 ].length
  let string = ""
  let count = 0

  while ( count < longestWordLength ) {
    arr.forEach( ( item ) => {
      if ( item[ count ] ) {
        string += item[ count ]
      }
    } )
    count++
  }
  return string
}