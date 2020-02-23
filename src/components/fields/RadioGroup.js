import React from 'react'
import RadioItem from './RadioItem'
import Error from './Error'
import Hint from './Hint'

export default function RadioGroup (props) {
  const { name = '', items = [], value = null, hint = null, error = null, handleChange = null } = props

  return (
    <div className={`govuk-form-group ${error ? 'govuk-form-group--error' : ''}`}>
      <Hint id={name} hint={hint}/>
      <Error id={name} error={error}/>
      <div className="govuk-radios">
        {items.map((item, index) => {
          const id = index ? `${name}-${index + 1}` : name
          const checked = value === item.value
          console.log(`Checked: ${value} === ${item.value} => `, checked)
          return <RadioItem key={index} item={{ id, name, ...item }} handleChange={handleChange} checked={checked} error={error}/>
        })}
      </div>
    </div>
  )
}
