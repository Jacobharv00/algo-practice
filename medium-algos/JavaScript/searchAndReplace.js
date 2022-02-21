// Perform a search and replace on the sentence using the arguments provided and return the new sentence.

// First argument is the sentence to perform the search and replace on.

// Second argument is the word that you will be replacing( before ).

// Third argument is what you will be replacing the second argument with ( after ).

//   Note: Preserve the case of the first character in the original word when you are replacing it.For example if you mean to replace the word Book with the word dog, it should be replaced as Dog

function myReplace ( str, before, after ) {
  const index = str.indexOf( before )

  if ( str[ index ] === str[ index ].toUpperCase() ) {
    // can also use + after.substr(1)
    after = after.charAt( 0 ).toUpperCase() + after.slice( 1 )
  } else {
    after = after.charAt( 0 ).toLowerCase() + after.slice( 1 )
  }

  str = str.replace( before, after )
  return str
}

myReplace( "A quick brown fox jumped over the lazy dog", "jumped", "leaped" )
// Result should be => 'A quick brown fox leaped over the lazy dog'


// slice() works like substring() with a few different behaviors.

// Syntax: string.slice( start, stop )
// Syntax: string.substring( start, stop );

// What they have in common:
// If start equals stop: returns an empty string
// If stop is omitted: extracts characters to the end of the string
// If either argument is greater than the string's length, the string's length will be used instead.

// Distinctions of substring():
// If start > stop, then substring will swap those 2 arguments.
// If either argument is negative or is NaN, it is treated as if it were 0.

// Distinctions of slice():
// If start > stop, slice() will return the empty string. ( "" )
// If start is negative: sets char from the end of string, exactly like substr() in Firefox.This behavior is observed in both Firefox and IE.
// If stop is negative: sets stop to: string.length – Math.abs( stop )( original value ), except bounded at 0( thus, Math.max( 0, string.length + stop ) )