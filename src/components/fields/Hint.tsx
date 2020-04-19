import React from 'react'

interface Props {
  id: string | null;
  hint: string | null;
  className: string | null;
}

export default function Error({id = null, hint = null, className = ''}: Props) {
  return !hint ? null : <span id={`${id}-hint`} className={`govuk-hint ${className}`}>{hint}</span>
}