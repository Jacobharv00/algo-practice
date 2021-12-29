function checkMagazine ( magazine, note ) {

  for ( let word of note ) {
    const idx = magazine.indexOf( word )
    if ( idx !== -1 ) {
      magazine[ idx ] = ""
    } else {
      return console.log( 'No' )
    }
  }
  console.log( 'Yes' )
}

// I would return but in order to pass tests for hackerRank need to console.log()