const unit = 6
const multiply = (factor = 1) => `${factor * unit}px`

export default {
  unit,
  small: multiply(2),
  base: multiply(4),
  large: multiply(10),
}
