const isPalindrome = x => {
  let reversed = x.toString().split( '' ).reverse().join( '' )

  return ( x.toString() === reversed )
}

// An integer is a palindrome when it reads the same backward as forward
// 121 => Is palindrome
// 123 => Not palindrome

// Given an integer x, return true if x is palindrome integer.
// Need to look at x and see if when rearranged it is the same.
// Negative numbers will not be palindrome
// Do I need to account for numbers rearranged in any order or just when first and last are swapped?
