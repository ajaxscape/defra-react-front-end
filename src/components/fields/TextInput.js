import React, { useContext, useState } from 'react'
import FormContext from '../FormContext'
import Error from './Error'
import Hint from './Hint'
import VisuallyHidden from './VisuallyHidden'
import ariaDescribedBy from '../attributes/ariaDescribedBy'

export default function TextInput (props) {
  const { id, name = id, value: initialValue, error = null, type = 'text', label = null, labelHidden = null, hint, className = '' } = props

  const [value, setValue] = useState(initialValue)

  const { data, setFormData } = useContext(FormContext)

  function handleChange (e) {
    e.persist()
    setValue(e.target.value)
  }

  setFormData({...data, [name]: value})

  return (
    <div className={`govuk-form-group ${error ? 'govuk-form-group--error' : ''}`}>
      <label className="govuk-label" htmlFor={id}>{label}<VisuallyHidden>{labelHidden}</VisuallyHidden></label>
      <Hint id={id} hint={hint}/>
      <Error id={id} error={error}/>
      <input
        id={id}
        className={`govuk-input ${className} ${error ? 'govuk-input--error' : ''}`}
        name={name}
        type={type}
        aria-describedby={ariaDescribedBy({id, hint, error})}
        autoComplete="on"
        spellCheck="false"
        onChange={handleChange}
        value={value}
      />
    </div>
  )
}
