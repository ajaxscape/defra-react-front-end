import React from 'react'
import Form from '../Form'
import Legend from '../Legend'
import RadioGroup from '../RadioGroup'

const items = [
  {
    value: 'england',
    label: 'England'
  },

  { divider: 'or' },

  {
    value: 'germany',
    label: 'Germany',
    hint: 'Great Beer'
  }

]

export default function WhoOwnsItem (props) {
  const { route } = props
  return (
    <Form>
      <Legend>{route.title}</Legend>
      <RadioGroup name='who-owns-item' items={items}/>
    </Form>
  )
}
