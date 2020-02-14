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
  const { route } = props
  return (
    <Form action={route.path}>
      <Legend>{route.title}</Legend>
      <RadioGroup name='who-owns-item' items={items}/>
    </Form>
  )
}
