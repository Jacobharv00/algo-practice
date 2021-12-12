const fib = ( num ) => {
  if ( num <= 1 ) return num

  return fib( num - 1 ) + fib( num - 2 )

}