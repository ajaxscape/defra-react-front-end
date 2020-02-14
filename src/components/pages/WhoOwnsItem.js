import React from 'react'
import Form from '../Form'
import Legend from '../Legend'
import RadioGroup from '../RadioGroup'
import Button from '../Button'

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
    <Form>
      <Legend>{route.title}</Legend>
      <RadioGroup name='who-owns-item' items={items}/>
      <Button>Continue</Button>
    </Form>
  )
}
