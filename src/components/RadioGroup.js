import React from 'react'
import RadioItem from './RadioItem'

export default function RadioGroup (props) {
  const { name = '', items = [] } = props
  return (
    <div className="govuk-radios">
      {items.map((item, index) => {
        const id = index ? `${name}-${index+1}` : name
        return <RadioItem key={index} item = {{id, name, ...item}}/>
      })}
    </div>
  )
}
