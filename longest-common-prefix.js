function longestCommonPrefix ( strs ) {
  let i = 0
  let sorted = strs.sort()

  while ( i < sorted[ 0 ].length && sorted[ 0 ].charAt( i ) === sorted[ sorted.length - 1 ].charAt( i ) ) {
    i++
  }


  return sorted[ 0 ].substring( 0, i )
}