import React from 'react'
import Button from './Button'

export default function Form (props) {
  const { action = null, children = null, onSubmit = null, nextLink, history} = props

  async function onSubmitForm (e) {
    e.preventDefault()
    if (onSubmit) {
      await onSubmit()
    }
    history.push(nextLink)
  }

  return (
    <form action={action} onSubmit={onSubmitForm} method="post" noValidate>
      <div className="govuk-form-group">
        <fieldset className="govuk-fieldset">
          {children}
        </fieldset>
      </div>

      <Button>Continue</Button>
    </form>
  )
}
