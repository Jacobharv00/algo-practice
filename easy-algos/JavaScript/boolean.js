// Check if a value is classified as a boolean primitive. Return true or false.
// Boolean primitives are true and false.

function booWho ( bool ) {
  if ( typeof bool === 'boolean' ) {
    return true
  }

  return false

  // Shorthand
  //return typeof bool === "boolean";
}

booWho( null )

// booWho( true ) should return true.

// booWho( false ) should return true.

// booWho( [ 1, 2, 3 ] ) should return false.

// booWho( [].slice ) should return false.

// booWho( { "a": 1 } ) should return false.

// booWho( 1 ) should return false.

// booWho( NaN ) should return false.

// booWho( "a" ) should return false.

// booWho( "true" ) should return false.

// booWho( "false" ) should return false.