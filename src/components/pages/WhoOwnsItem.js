import React from 'react'
import Form from '../Form'
import Legend from '../Legend'
import RadioGroup from '../RadioGroup'

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

  async function onSubmit (formData) {
    const ownerType = formData['who-owns-item']
    if (ownerType !== data.ownerType) {
      setAppData({...data, ownerType})
    }
  }

  return (
    <Form onSubmit={onSubmit} action={route.path} {...props}>
      <Legend>{route.title}</Legend>
      <RadioGroup name='who-owns-item' items={items} value={data.ownerType}/>
    </Form>
  )
}
