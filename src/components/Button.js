import React from 'react'

export default function Button (props) {
  const { children = null } = props
  return (
    <button className="govuk-button" data-module="govuk-button">
      {children}
    </button>
  )
}
