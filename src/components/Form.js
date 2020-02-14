import React from 'react'
import Button from './Button'

export default function Form (props) {
  const { action = null, children = null } = props
  return (
    <form action={action} method="post" noValidate>
      <div className="govuk-form-group">
        <fieldset className="govuk-fieldset">
          {children}
        </fieldset>
      </div>

      <Button>Continue</Button>
    </form>
  )
}
