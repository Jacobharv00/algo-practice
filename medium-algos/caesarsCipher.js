// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher.In a shift cipher the meanings of the letters are shifted by some set amount.
// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places.Thus A ↔ N, B ↔ O and so on.
// Write a function which takes a ROT13 encoded string as input and returns a decoded string.
// All letters will be uppercase.Do not transform any non - alphabetic character( i.e.spaces, punctuation ), but do pass them on.

const rot13 = ( str ) => {
  // Going to need the alphabet 
  const alphabet = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ]

  // New String
  let convertedString = ''

  // Loop through the str
  for ( let i = 0; i < str.length; i++ ) {
    const letter = str[ i ]
    const isLetter = alphabet.includes( letter )
    // if character is not letter add to convertedString
    if ( !isLetter ) {
      convertedString += letter
      // else rotate by + || - 13 places in alphabet && add to convertedString
    } else {
      // Find index 
      const letterIndex = alphabet.findIndex( l => l === letter )
      convertedString += alphabet[ letterIndex + 13 ] || alphabet[ letterIndex - 13 ]
    }
  }
  return convertedString
}



rot13( "SERR PBQR PNZC" ) // => FREE CODE CAMP

//rot13( "SERR CVMMN!" ) // =>  FREE PIZZA!

//rot13( "SERR YBIR?" ) // =>  FREE LOVE ?

//rot13( "GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT." ) // =>  THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.