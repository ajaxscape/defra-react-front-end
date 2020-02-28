import React, { useState, useContext, useEffect } from 'react'
import RadioItem from './RadioItem'
import FormContext from '../FormContext'
import Hint from './Hint'
import Error from './Error'

export default function RadioGroup (props) {
  const { name = '', items = [], value: initialValue, validate = null, error = null, hint = null } = props
  const [value, setValue] = useState(initialValue)

  const { data, setFormData } = useContext(FormContext)

  // useEffect(() => {
  //   if (value !== initialValue) {
  //     validate(data)
  //   }
  // }, [data])

  function handleChange (e) {
    e.persist()
    const { value } = e.target
    setValue(value)
  }

  setFormData({...data, [name]: value})

  return (
    <div className={`govuk-form-group ${error ? 'govuk-form-group--error' : ''}`}>
      <Hint id={name} hint={hint}/>
      <Error id={name} error={error}/>
      <div className="govuk-radios">
        {items.map((item, index) => {
          const id = index ? `${name}-${index + 1}` : name
          return <RadioItem key={index} item={{ id, name, ...item }} handleChange={handleChange} value={value}/>
        })}
      </div>
    </div>
  )
}
