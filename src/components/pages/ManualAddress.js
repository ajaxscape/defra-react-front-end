import React from 'react'

import Form from '../Form'
import Legend from '../Legend'
import TextInput from '../fields/TextInput'

const schema = {
  'id': '/Address',
  'type': 'object',
  'properties': {
    'business-name': { 'type': 'string' },
    'address-line-1': {
      'type': 'string',
      'minLength': 1,
    },
    'address-line-2': { 'type': 'string' },
    'town': {
      'type': 'string',
      'minLength': 1,
    },
    'postcode': {
      'type': 'string',
      'minLength': 1,
    },
    'country': { 'type': 'string' },
    'uprn': { 'type': 'string' },

  },
  'required': [
    'address-line-1',
    'town',
    'postcode',
  ],
}

export default function ManualAddress (props) {
  const { route, appData } = props
  const { data, setAppData } = appData

  async function handleValidated (formData) {
    setAppData({ ...data, address: { ...formData }})
  }


  const { address = {} } = {...data}

  console.log('Address: ', address)

  return (
    <Form action={route.path} schema={schema} handleValidated={handleValidated} values={address} {...props}>
      <Legend>{route.title}</Legend>
      <TextInput
        id="address-line-1"
        label="Building and street"
        labelHidden="line 1 of 2"
        value={address.addressLine_1}
        {...props}
      />
      <TextInput
        id="address-line-2"
        labelHidden="Building and street line 2"
        value={address.addressLine_2}
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
        hint="What ever"
        value={address.postcode}
        className='govuk-input--width-10'
        {...props}
      />
    </Form>
  )
}
