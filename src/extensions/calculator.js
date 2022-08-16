//
// Object calculator
//

//
// TODO: Define the following expression objects to produce the
//       required result.
//

// The following example defines the calculation:
// 1 (example.a) - (example.op) 1 (example.b) === 0 (example.expected)
// example.expectedDepth is the overall number of expression objects
// in example

const example = {
  op: '-',
  a: 1,
  b: 1,
  expected: 0,
  expectedDepth: 1
}

// The value of `a` and `b` can be calculations too

const exprOne = {
  op: '+',
  a: example, // NOTE: This is an expression object
  b: {
    op: '*',
    a: 20,
    b: 5 // TODO: Set 'undefined' to make this correct
  },
  expected: 100,
  expectedDepth: 3
}

// You can nest calculations as deep as you need to.

// So 1 * 2 * 3 * 4 * 5 is 1 * ( 2 * ( 3 * ( 4 * 5 ))) === 120

const exprTwo = {
  op: '*',
  a: 1,
  b: { op: '*', a: 2, b: { op: '*', a: 3, b: { op: '*', a: 4, b: 5 } } }, // TODO: Set 'undefined' to an object of the required depth to make the answer correct
  expected: 120,
  expectedDepth: 4
}

// You can do what you like to make the following correct :)

const exprThree = {
  op: '-',
  a: { op: '+', a: 1, b: { op: '*', a: 2, b: { op: '*', a: 4, b: 5 } } }, // TODO set this and the following 'undefined'
  b: {
    op: '*',
    a: 1,
    b: {
      op: '*',
      a: 2,
      b: {
        op: '*',
        a: 4,
        b: {
          op: '+',
          a: 2,
          b: { op: '+', a: 3, b: { op: '-', a: 123, b: 123 } }
        }
      }
    }
  },
  expected: 1,
  expectedDepth: 10,
  different: true
}

// TODO: Tricky one. You will need to modify the 'doIt' function in the '../../spec/extensions/calculator.spec.js' file to make the following test pass. The '%' op is the modulus (or remainder) operation. Eg 5 % 3 === 2 or, 5 divided by 3 leaves a remainer of 2

const exprFour = {
  op: '%',
  a: 5,
  b: 3,
  expected: 2,
  expectedDepth: 1
}

module.exports = {
  example,
  exprOne,
  exprTwo,
  exprThree,
  exprFour
}
