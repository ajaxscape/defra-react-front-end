import React from 'react'
import Form from '../Form'
import Legend from '../Legend'
import RadioGroup from '../RadioGroup'

import useAppData from '../hooks/useAppData'

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

  const { data, setAppData } = useAppData()

  async function onSubmit (formData) {
    setAppData({...data, ...formData})
  }

  return (
    <Form onSubmit={onSubmit} action={route.path} {...props}>
      <Legend>{route.title}</Legend>
      <RadioGroup name='who-owns-item' items={items}/>
    </Form>
  )
}
