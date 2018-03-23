export default function completionRateClassification (number, fin = null) {
  let classification = 'warning'
  if (number >= 60) { classification = 'base' }
  if (number >= 90) { classification = 'success' }

  return fin ? fin(classification) : classification
}
