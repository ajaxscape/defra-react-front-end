export default function ariaDescribedBy ({ id, name, hint, error }) {
  const hintId = hint ? `${id}-hint` : null
  const errorId = error ? `${name || id}-error` : null

  if (errorId) {
    if (hintId) {
      return `${hintId} ${errorId}`
    } else {
      return errorId
    }
  }
  return hintId
}