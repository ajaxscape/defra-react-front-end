import React from 'react'

interface Props {
  children: string | null
}

export default function VisuallyHidden({children}: Props) {
  return !children ? null : <span className="govuk-visually-hidden">{children}</span>
}