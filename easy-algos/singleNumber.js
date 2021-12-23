const singleNumber = ( nums ) => {
  let map = new Map()
  let value = 0

  for ( let num of nums ) {

    if ( map.has( num ) ) {
      //map.set(key, value) syntax
      map.set( num, map.get( num ) + 1 )
    } else {
      map.set( num, 1 )
    }

  }

  // console.log( 'MAP', map )

  for ( let [ num, val ] of map ) {

    // console.log('NUM',num)
    // console.log('VAL',val)

    if ( map.get( num ) === 1 ) {
      value = num
    }

  }

  return value
}

// nums => [2,2,1]
// Every element appears twice except for one. 
// Need to find the solo element
// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.