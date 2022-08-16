const answers = require('../../src/extensions/calculator')

function calculate(expr) {
  const top = expr
  top.depth = 0

  expr.result = doIt(expr)

  function doIt(expr) {
    if (typeof expr === 'number') {
      return expr
    } else if (typeof expr === 'object') {
      top.depth++
      switch (expr.op) {
        case '+':
          return doIt(expr.a) + doIt(expr.b)
        case '-':
          return doIt(expr.a) - doIt(expr.b)
        case '/':
          return doIt(expr.a) / doIt(expr.b)
        case '*':
          return doIt(expr.a) * doIt(expr.b)
        default:
          return NaN
      }
    } else {
      return NaN
    }
  }
}

function check(expr) {
  calculate(expr)
  expect(expr.result).toBe(expr.expected)
  expect(expr.depth).toBe(expr.expectedDepth)
  if (expr.different) {
    expect(expr.a).not.toBe(expr.b)
  }
}

describe('Object Calculator', () => {
  it(`example === ${answers.example.expected}`, () => {
    check(answers.example)
  })

  it(`exprOne === ${answers.exprOne.expected}`, () => {
    check(answers.exprOne)
  })

  it(`exprTwo === ${answers.exprTwo.expected}`, () => {
    check(answers.exprTwo)
  })

  it(`exprThree === ${answers.exprThree.expected}`, () => {
    check(answers.exprThree)
  })

  it(`exprFour === ${answers.exprFour.expected}`, () => {
    check(answers.exprFour)
  })
})
