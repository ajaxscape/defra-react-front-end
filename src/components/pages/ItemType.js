import React from 'react'

import Form from '../Form'
import Legend from '../Legend'
import RadioGroup from '../RadioGroup'

const items = [
  {
    label: 'Musical instrument made before 1975 with less than 20% ivory',
    value: 'musical-pre-1975-less-than-20-percent',
    hint: 'For example piano, violin bow, flute'
  },
  {
    label: 'Item made before 1947 with less than 10% ivory',
    value: 'pre-1947-less-than-10-percent'
  },
  {
    label: 'Portrait miniature made before 1918',
    value: 'portrait-miniature-pre-1918'
  },
  {
    label: 'Item to be acquired by a qualifying museum',
    value: 'apply-to-register-to-sell-an-item-to-a-museum'
  },

  { divider: 'or' },

  {
    label: 'Item of outstanding artistic, cultural or historical value made before 1918',
    value: 'apply-for-an-rmi-certificate'
  }

]

export default function ItemType (props) {
  const { route } = props

  async function onSubmit (data) {
    window.alert(JSON.stringify(data))
  }

  return (
    <Form onSubmit={onSubmit} action={route.path} {...props}>
      <Legend>{route.title}</Legend>
      <RadioGroup name='item-type' items={items}/>
    </Form>
  )
}
