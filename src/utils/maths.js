import { createUnit, divide, multiply, unit } from "mathjs"

createUnit(`rem`)

export const divideRem = (numerator, denominator) => {
  const result = divide(unit(numerator), denominator)
  return `${result.value}rem`
}

export const multiplyRem = (num1, num2) => {
  const result = multiply(unit(num1), num2)
  return `${result.value}rem`
}