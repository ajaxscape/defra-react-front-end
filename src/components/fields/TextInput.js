import React, { useContext, useState } from 'react'
import FormContext from '../FormContext'

function Hint (props) {
  const { id, hint } = props
  return !hint ? null : <span id={id} className="govuk-hint">{hint}</span>
}

function LabelHidden (props) {
  const { children } = props
  return !children ? null : <span className="govuk-visually-hidden">{children}</span>
}

export default function TextInput (props) {
  const { id, name = id, value: initialValue, type = 'text', label = null, labelHidden = null, hint, className = '' } = props
  const hintId = hint ? `${id}-hint` : null

  const [value, setValue] = useState(initialValue || '')

  function onChange (e) {
    setValue(e.target.value)
  }

  const { data } = useContext(FormContext)
  data[name] = value

  return (
    <div className="govuk-form-group">
      <label className="govuk-label" htmlFor={id}>{label}<LabelHidden>{labelHidden}</LabelHidden></label>
      <Hint id={hintId}/>
      <input
        id={id}
        className={`govuk-input ${className}`}
        name={name}
        type={type}
        aria-describedby={hintId}
        autoComplete="on"
        spellCheck="false"
        onChange={onChange}
        value={value}
      />
    </div>
  )
}
