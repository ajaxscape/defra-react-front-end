import React from 'react'

export default function VisuallyHidden (props) {
  const { children } = props
  return !children ? null : <span className="govuk-visually-hidden">{children}</span>
}