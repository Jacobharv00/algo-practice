const searchInsert = function ( nums, target ) {
  if ( nums.includes( target ) ) {
    return nums.indexOf( target )
  }
  nums.push( target )
  nums.sort( ( a, b ) => a - b )

  return nums.indexOf( target )
}