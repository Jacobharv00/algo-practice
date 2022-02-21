const fib = ( num ) => {
  if ( num <= 1 ) return num

  return fib( num - 1 ) + fib( num - 2 )

}


// function fibonacci ( num ) {
//   let a = 1, b = 0, temp

//   while ( num >= 0 ) {
//     temp = a
//     a = a + b
//     b = temp
//     num--
//   }
//   return b
// }

// function fibonacci ( num ) {
//   const sequence = [ 0, 1 ]

//   for ( i = 2; i <= num; i++ ) {
//     sequence[ i ] = sequence[ i - 2 ] + sequence[ i - 1 ]
//   }

// return sequence[ num ]
// }