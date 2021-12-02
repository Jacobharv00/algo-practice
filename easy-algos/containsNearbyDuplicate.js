const containsNearbyDuplicate = ( nums, k ) => {
  let j = 1
  let next = 1
  for ( let i = 0; i < nums.length; i++ ) {
    while ( j < nums.length ) {
      if ( nums[ i ] == nums[ j ] && Math.abs( i - j ) <= k ) {
        return true
      }
      // console.log('line 9', nums[i])
      // console.log('line 10',nums[j])
      j++
    }
    next++
    j = next
  }
  return false
};