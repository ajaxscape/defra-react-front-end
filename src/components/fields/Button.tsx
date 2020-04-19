import React from 'react'

interface Props {
  children: [] | null
}

export default function Button({children = null}: Props) {
  return (
    <button className="govuk-button" data-module="govuk-button">
      {children}
    </button>
  )
}
