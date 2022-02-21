// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

function convertHTML ( str ) {
  let temp = str.split( "" )

  for ( let i = 0; i < temp.length; i++ ) {
    switch ( temp[ i ] ) {
      case "<":
        temp[ i ] = "&lt;"
        break
      case "&":
        temp[ i ] = "&amp;"
        break
      case ">":
        temp[ i ] = "&gt;"
        break
      case '"':
        temp[ i ] = "&quot;"
        break
      case "'":
        temp[ i ] = "&apos;"
        break
    }
  }

  temp = temp.join( "" )
  return temp
}

convertHTML( "Dolce & Gabbana" ) // => Dolce &amp; Gabbana

//convertHTML("Hamburgers < Pizza < Tacos") => Hamburgers &lt; Pizza &lt; Tacos
//convertHTML("Sixty > twelve") => Sixty &gt; twelve
//convertHTML("Schindler's List") => Schindler&apos;s List