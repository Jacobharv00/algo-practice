// Convert the given number into a roman numeral.
// All roman numerals answers should be provided in upper-case.

const convertToRoman = ( num ) => {
  const romanTable = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  }

  let result = ''

  for ( const key in romanTable ) {
    const number = romanTable[ key ]

    while ( number <= num ) {
      num -= number
      result += key
    }
  }
  return result
}

convertToRoman( 36 ) // => XXXVI

// convertToRoman( 2 ) // => II.

// convertToRoman( 3 ) // => III.

// convertToRoman( 4 ) // => IV.

// convertToRoman( 5 ) // => V.

// convertToRoman( 9 ) // => IX.

// convertToRoman( 12 ) // => XII.

// convertToRoman( 16 ) // => XVI.

// convertToRoman( 29 ) // => XXIX.

// convertToRoman( 44 ) // => XLIV.

// convertToRoman( 45 ) // => XLV.

// convertToRoman( 68 ) // => LXVIII

// convertToRoman( 83 ) // => LXXXIII

// convertToRoman( 97 ) // => XCVII

// convertToRoman( 99 ) // => XCIX

// convertToRoman( 400 ) // => CD