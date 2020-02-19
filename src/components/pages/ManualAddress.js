import React, {useState} from 'react'
import { Validator } from 'jsonschema'

import Form from '../Form'
import Legend from '../Legend'
import TextInput from '../fields/TextInput'

const addressSchema = {
  'id': '/Address',
  'type': 'object',
  'properties': {
    'businessName': { 'type': 'string' },
    'addressLine1': {
      'type': 'string',
      'minLength': 1,
    },
    'addressLine2': { 'type': 'string' },
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
    'addressLine1',
    'town',
    'postcode',
  ],
}

export default function ManualAddress (props) {
  const { route, appData } = props
  const { data, setAppData } = appData
  const errors = {}

  console.log('****************')
  console.log(errors)
  console.log('****************')

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

    const validator = new Validator()
    validator.addSchema(addressSchema, '/Address')
    validator.validate(address, addressSchema).errors.forEach(({property, message}) => {
      property.substr(property.indexOf('.'))
      errors[property.substr(property.indexOf('.')+1)] = message
    })

    if (errors.length) {
      return errors
    } else {
      setAppData({ ...data, address })
    }
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
        error={errors.addressLine1}
        {...props}
      />
      <TextInput
        id="address-line-2"
        labelHidden="Building and street line 2"
        value={address.addressLine2}
        error={errors.addressLine2}
        {...props}
      />
      <TextInput
        id="town"
        label="Town or city"
        value={address.town}
        className='govuk-!-width-two-thirds'
        error={errors.town}
        {...props}
      />
      <TextInput
        id="county"
        label="County"
        value={address.county}
        className='govuk-!-width-two-thirds'
        error={errors.county}
        {...props}
      />
      <TextInput
        id="postcode"
        label="Postcode"
        hint="What ever"
        value={address.postcode}
        className='govuk-input--width-10'
        error={errors.postcode}
        {...props}
      />
    </Form>
  )
}
