import React from 'react'

export default function Error (props) {
  const { id, error } = props
  return !error ? null : <span id={error ? `${id}-error` : null} className="govuk-error-message"><span className="govuk-visually-hidden">Error:</span> {error}</span>
}
