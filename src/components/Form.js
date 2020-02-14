import React from 'react'

export default function Form (props) {
  const { children = null } = props
  return (
    <div className="govuk-form-group">
    <fieldset className="govuk-fieldset">
      {children}
    </fieldset>
    </div>
  )
}
