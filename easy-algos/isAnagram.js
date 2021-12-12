/*
  @param {string} s
  @param {string} t
  @return {boolean}
 */

const isAnagram = ( s, t ) => {

  let newS = s.split( '' ).sort().join( '' )

  //console.log( newS )

  let newT = t.split( '' ).sort().join( '' )

  //console.log( newT )

  return newS === newT
}

// Notes
/*
Parameters are two strings
return true if t matches s and false otherwise
I need a way to compare both strings even if the letters are not in the same order
both strings consist of lowercase letters

Step 1 = What if I split them? => S = ['a', 'n', 'a','g', 'r', 'a','m']

Step 2 = Sort them? => S = [ 'a', 'a', 'a','g', 'm', 'n','r']

Step 3 = Then rejoin and just compare the new sorted variables? => S = aaagmnr T = aaagmnr => true

*/