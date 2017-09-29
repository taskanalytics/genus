export const unit = 6
const multiply = (factor = 1) => `${factor * unit}px`

export const xsmall = multiply(1)
export const small = multiply(2)
export const base = multiply(4)
export const large = multiply(10)
