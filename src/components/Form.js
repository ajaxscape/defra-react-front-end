import React, { useContext } from 'react'
import Button from './Button'
import FormContext from './FormContext'
import useFormData from './hooks/useFormData'

export default function Form (props) {
  const { action = null, children = null, onSubmit = null, nextLink, history } = props
  const formData = useFormData()

  async function onSubmitForm (e) {
    e.preventDefault()
    console.log(e)
    if (onSubmit) {
      await onSubmit(formData)
    }
    history.push(nextLink)
  }

  return (
    <FormContext.Provider value={formData}>
      <form action={action} onSubmit={onSubmitForm} method="post" noValidate>
        <div className="govuk-form-group">
          <fieldset className="govuk-fieldset">
            {children}
          </fieldset>
        </div>

        <Button>Continue</Button>
      </form>
    </FormContext.Provider>
  )
}
