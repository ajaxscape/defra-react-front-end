import React from 'react'

export default function Legend (props) {
  const { children = null } = props
  return (
    <legend className="govuk-fieldset__legend govuk-fieldset__legend--xl">
      <h1 className="govuk-fieldset__heading">
        {children}
      </h1>
    </legend>
  )
}
