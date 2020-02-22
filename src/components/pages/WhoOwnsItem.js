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

export default function WhoOwnsItem (props) {
  const { route, appData } = props
  const { data, setAppData } = appData

  async function handleValidated (formData) {
    setAppData({...data, ...formData})
  }

  return (
    <Form handleValidated={handleValidated} action={route.path} {...props}>
      <Legend>{route.title}</Legend>
      <RadioGroup name='who-owns-item' items={items} value={data.ownerType}/>
    </Form>
  )
}
