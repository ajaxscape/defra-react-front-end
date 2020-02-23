import React from 'react'
import Form from '../Form'
import Legend from '../Legend'
import RadioGroup from '../fields/RadioGroup'

const items = [
  {
    label: 'I own it',
    value: 'i-own-it'
  },
  {
    label: 'Someone else owns it',
    value: 'someone-else'
  }

]

const schema = {
  'id': '/WhoOwnsItem',
  'type': 'object',
  'properties': {
    'owner-type': { 'type': 'string' }
  },
  'required': [
    'owner-type'
  ],
}

export default function WhoOwnsItem (props) {
  const { route, appData } = props
  const { data, setAppData } = appData

  async function handleSubmit (values) {
    const ownerType = values['owner-type']
    if (ownerType !== data.ownerType) {
      setAppData({...data, ownerType})
    }
  }

  return (
    <Form handleSubmit={handleSubmit} schema={schema} action={route.path} {...props}>
      <Legend>{route.title}</Legend>
      <RadioGroup name='owner-type' items={items} value={data.ownerType}/>
    </Form>
  )
}
