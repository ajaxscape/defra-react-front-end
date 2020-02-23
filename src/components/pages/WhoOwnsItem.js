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

  async function handleValidated (formData) {
    setAppData({...data, ...formData})
  }

  const { ownerType } = data

  console.log('ItemType: ', ownerType)

  return (
    <Form handleValidated={handleValidated} schema={schema} action={route.path} values={{ownerType}} {...props}>
      <Legend>{route.title}</Legend>
      <RadioGroup name='owner-type' items={items} value={ownerType}/>
    </Form>
  )
}
