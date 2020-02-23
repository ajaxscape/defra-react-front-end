import React from 'react'

export default function Hint (props) {
  const { id, hint, className = '' } = props
  return !hint ? null : <span id={hint ? `${id}-hint` : null} className={`govuk-hint ${className}`}>{hint}</span>
}