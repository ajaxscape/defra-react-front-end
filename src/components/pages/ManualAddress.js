import React from 'react'

import Form from '../Form'
import Legend from '../Legend'
import RadioGroup from '../fields/RadioGroup'
import FieldGroup from '../fields/FieldGroup'

export default function ManualAddress (props) {
  const { route, appData } = props
  const { data, setAppData } = appData

  async function onSubmit (formData) {
    const address = {
      businessName: formData['business-name'],
      addressLine1: formData['address-line-1'],
      addressLine2: formData['address-line-2'],
      town: formData['town'],
      county: formData['county'],
      postcode: formData['postcode'],
      country: formData['country'],
      uprn: formData['uprn'],
    }

    setAppData({ ...data, address })
  }

  return (
    <Form onSubmit={onSubmit} action={route.path} {...props}>
      <Legend>{route.title}</Legend>
      <FieldGroup {...props}>
        <label className="govuk-label" htmlFor="address-line-1">
          Building and street <span className="govuk-visually-hidden">line 1 of 2</span>
        </label>
        <input className="govuk-input" id="address-line-1" name="address-line-1" type="text" autoComplete="address-line1"/>
      </FieldGroup>
    </Form>
)
}
