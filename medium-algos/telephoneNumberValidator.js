// Return true if the passed string looks like a valid US phone number.

// The user may fill out the form field any way they choose as long as it has the format of a valid US number.The following are examples of valid formats for US numbers

// Examples:
telephoneCheck( "(555)555-5555" ) // => true

//telephoneCheck( "1(555)555-5555" ) // => true

//telephoneCheck( "555-5555" ) // => false

//telephoneCheck( "5555555" ) // => false

const telephoneCheck = ( str ) => {
  const validPatterns = [
    //555-555-555
    /^\d{3}-\d{3}-\d{4}$/,

    //1 555-555-555
    /^1 \d{3}-\d{3}-\d{4}$/,

    //1 (555) 555-5555
    /^1 \(\d{3}\) \d{3}-\d{4}$/,

    //5555555555
    /^\d{10}$/,

    //(555)555-5555
    /^\(\d{3}\)\d{3}-\d{4}$/,

    //1 555 555 555
    /^1 \d{3} \d{3} \d{4}$/,

    //1(555)555-5555
    /^1\(\d{3}\)\d{3}-\d{4}$/
  ]

  // some() returns true or false
  return validPatterns.some( pattern => pattern.test( str ) )

}

telephoneCheck( "555-555-5555" ) // => a Boolean