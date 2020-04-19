import React, {Children, cloneElement} from 'react'
import Button from './fields/Button'
import FormContext from './FormContext'
import useFormData from './hooks/useFormData'
import useValidator from './hooks/useValidator'
import ErrorSummary from './ErrorSummary'
import FormWrapper from "./FormWrapper";
import {Schema} from "jsonschema";

interface Props {
  action: string | undefined;
  schema: Schema;
  errorMessages: string | undefined;
  handleSubmit: (data: FormData | any) => {};
  nextLink: string | null;
  history: any;
}

export default function Form({action, schema, errorMessages, handleSubmit, nextLink, history}: Props) {

  const formData = useFormData()
  const {data} = formData

  const {errors, validate} = useValidator(schema, errorMessages)

  async function onSubmitForm(e: React.FormEvent) {
    e.preventDefault()
    let valid = true
    if (handleSubmit) {
      valid = validate(data)
      if (valid) {
        await handleSubmit(data)
      }
    }
    if (valid) {
      history.push(nextLink)
    }
  }

  function onValidate() {
    return validate(data)
  }

  return (
    <FormContext.Provider value={formData}>
      <ErrorSummary errors={errors}/>
      <form action={action} onSubmit={onSubmitForm} method="post" noValidate>
        <div className="govuk-form-group">
          <fieldset className="govuk-fieldset">
            <FormWrapper {...props} errors={errors} validate={onValidate}/>
          </fieldset>
        </div>

        <Button>Continue</Button>
      </form>
    </FormContext.Provider>
  )
}
