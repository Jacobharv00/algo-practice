const checkCashRegister = ( price, cash, cid ) => {
  let change = cash * 100 - price * 100
  let cidTotal = 0

  for ( let ele of cid ) {
    cidTotal += ele[ 1 ] * 100
  }

  if ( change > cidTotal ) {
    return { status: 'INSUFFICIENT_FUNDS', change: [] }
  } else if ( change === cidTotal ) {
    return { status: 'CLOSED', change: cid }
  } else {
    let answer = []
    cid = cid.reverse()
    let moneyUnits = {
      'ONE HUNDRED': 10000,
      'TWENTY': 2000,
      'TEN': 1000,
      'FIVE': 500,
      'ONE': 100,
      'QUARTER': 25,
      'DIME': 10,
      'NICKEL': 5,
      'PENNY': 1
    }

    for ( let ele of cid ) {
      let holder = [ ele[ 0 ], 0 ]
      ele[ 1 ] = ele[ 1 ] * 100
      while ( change >= moneyUnits[ ele[ 0 ] ] && ele[ 1 ] > 0 ) {
        change -= moneyUnits[ ele[ 0 ] ]
        ele[ 1 ] -= moneyUnits[ ele[ 0 ] ]
        holder[ 1 ] += moneyUnits[ ele[ 0 ] ] / 100
      }
      if ( holder[ 1 ] > 0 ) {
        answer.push( holder )
      }
    }
    if ( change > 0 ) {
      return { status: 'INSUFFICIENT_FUNDS', change: [] }
    }
    return { status: 'OPEN', change: answer }
  }
}

checkCashRegister( 19.5, 20, [ [ "PENNY", 1.01 ], [ "NICKEL", 2.05 ], [ "DIME", 3.1 ], [ "QUARTER", 4.25 ], [ "ONE", 90 ], [ "FIVE", 55 ], [ "TEN", 20 ], [ "TWENTY", 60 ], [ "ONE HUNDRED", 100 ] ] )

// Design a cash register drawer function checkCashRegister () that accepts purchase price as the first argument( price ), payment as the second argument( cash ), and cash -in -drawer( cid ) as the third argument.

// cid is a 2D array listing available currency.

// The checkCashRegister() function should always return an object with a status key and a change key.

//   Return { status: "INSUFFICIENT_FUNDS", change: [] } if cash -in -drawer is less than the change due, or if you cannot return the exact change.

//     Return { status: "CLOSED", change: [ ...] } with cash -in -drawer as the value for the key change if it is equal to the change due.

//       Otherwise, return { status: "OPEN", change: [ ...] }, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.