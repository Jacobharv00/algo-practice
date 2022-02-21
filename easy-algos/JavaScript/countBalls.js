const countBalls = ( lowLimit, highLimit ) => {
  let boxes = {}
  let output = 0

  for ( let i = lowLimit; i <= highLimit; i++ ) {

    let num = i
    let sum = 0

    while ( num > 0 ) {
      sum += num % 10
      num = Math.floor( num / 10 )
    }

    boxes[ sum ] ? boxes[ sum ] += 1 : boxes[ sum ] = 1
    output = Math.max( output, boxes[ sum ] )
  }

  return output
}

/*
balls are numbered from lowLimit up to highLimit LL = 1 HL = 10 => 10 balls?
infinite number of box's numbered from 1 to infinity
put each ball in the box with a number equal to the sum of digits of the balls number

example 1 is ball number 321 => 3 + 2 + 1 = 6 => the box number = 6
example 2 is ball number 10 => 1 + 0 = 1 => the box number = 1


var countBalls = function(lowLimit, highLimit) {
    const box = {}

    for (let num = lowLimit; num <= highLimit; num++) {
        const boxId = [...String(num)].reduce((acc, el) => acc + Number(el), 0)
        box[boxId] = (box[boxId] ?? 0) + 1
    }

    return Math.max(...Object.values(box));
}



*/