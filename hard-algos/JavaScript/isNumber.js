// const isNumber = (s) => {
//     return !isNaN(s) && s.trim() !== '';
// }

const isNumber = ( s ) => {
  if ( typeof s == 'number' ) {
    return s - s === 0
  }

  if ( typeof s === 'string' && s.trim() !== '' ) {
    s = Number( s )
    if ( s == Infinity || s == -Infinity ) { return true }
    return Number.isFinite() ? Number.isFinite( +s ) : isFinite( +s )
  }

  return false
}

// Working on first hard algo on leet code. Passing when run tests but fails when submitted. FIX!!!!

/*
Given a string s, return true if s is a valid number.

A valid number can be split up into these components (in order):
A decimal number or an integer.
(Optional) An 'e' or 'E', followed by an integer.

A decimal number can be split up into these components (in order):
(Optional) A sign character (either '+' or '-').
One of the following formats:
One or more digits, followed by a dot '.'.
One or more digits, followed by a dot '.', followed by one or more digits.
A dot '.', followed by one or more digits.

An integer can be split up into these components (in order):
(Optional) A sign character (either '+' or '-').
One or more digits.

For example, all the following ARE valid numbers: ["2", "0089", "-0.1", "+3.14", "4.", "-.9", "2e10", "-90E3", "3e+7", "+6e-1", "53.5e93", "-123.456e789"],

while the following ARE NOT valid numbers: ["abc", "1a", "1e", "e3", "99e2.5", "--6", "-+3", "95a54e53"].

*/