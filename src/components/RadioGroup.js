import React, { useState, useContext } from 'react'
import RadioItem from './RadioItem'
import FormContext from './FormContext'

export default function RadioGroup (props) {
  const { name = '', items = [], initialValue } = props
  const [value, setValue] = useState(initialValue)

  function onChange (e) {
    setValue(e.target.value)
  }

  const { data } = useContext(FormContext)
  data[name] = value

  return (
    <div className="govuk-radios">
      {items.map((item, index) => {
        const id = index ? `${name}-${index + 1}` : name
        return <RadioItem key={index} item={{ id, name, ...item }} onChange={onChange} value={value}/>
      })}
    </div>
  )
}
