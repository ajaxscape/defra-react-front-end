import React from 'react'

interface Props {
  id: string | null;
  error: string | null;
}

export default function Error({id = null, error = null}: Props) {
  return !error ? null : <span id={`${id}-error`} className="govuk-error-message"><span
    className="govuk-visually-hidden">Error:</span> {error}</span>
}