export const getRounded = value => {
  let rounded = Math.round(value * 10) / 10
  if (!rounded && value > 0) {
    rounded = Math.round(value * 100) / 100
  }
  return rounded
}

export const getDelta = (a, b) => getRounded(b - a)

export const getPercentage = (part, total) =>
  total > 0 ? getRounded(part / total * 100) : 0
