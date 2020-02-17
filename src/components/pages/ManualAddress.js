import React from 'react'

import Form from '../Form'
import Legend from '../Legend'
import TextInput from '../fields/TextInput'

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

  const { address = {} } = data

  return (
    <Form onSubmit={onSubmit} action={route.path} {...props}>
      <Legend>{route.title}</Legend>
      <TextInput
        id="address-line-1"
        label="Building and street"
        labelHidden="line 1 of 2"
        value={address.addressLine1}
        {...props}
      />
      <TextInput
        id="address-line-2"
        labelHidden="Building and street line 2"
        value={address.addressLine2}
        {...props}
      />
      <TextInput
        id="town"
        label="Town or city"
        value={address.town}
        className='govuk-!-width-two-thirds'
        {...props}
      />
      <TextInput
        id="county"
        label="County"
        value={address.county}
        className='govuk-!-width-two-thirds'
        {...props}
      />
      <TextInput
        id="postcode"
        label="Postcode"
        value={address.postcode}
        className='govuk-input--width-10'
        {...props}
      />
    </Form>
)
}
