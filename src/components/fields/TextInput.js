import React, { useContext, useState } from 'react'
import FormContext from '../FormContext'

function Hint (props) {
  const { id, hint } = props
  return !hint ? null : <span id={id} className="govuk-hint">{hint}</span>
}

function Error (props) {
  const { id, error } = props
  return !error ? null : <span id={id} className="govuk-error-message"><span className="govuk-visually-hidden">Error:</span> {error}</span>
}

function LabelHidden (props) {
  const { children } = props
  return !children ? null : <span className="govuk-visually-hidden">{children}</span>
}

function getAriaDescribedBy ({ hintId, errorId }) {
  if (errorId) {
    if (hintId) {
      return `${hintId} ${errorId}`
    } else {
      return errorId
    }
  }
  return hintId
}

export default function TextInput (props) {
  const { id, name = id, value: initialValue, type = 'text', label = null, labelHidden = null, hint = null, className = '', error = null } = props
  const hintId = hint ? `${name}-hint` : null
  const errorId = error ? `${name}-error` : null

  const [value, setValue] = useState(initialValue || '')

  function onChange (e) {
    setValue(e.target.value)
  }

  const { data } = useContext(FormContext)
  data[name] = value

  const ariaDescribedBy = getAriaDescribedBy({hintId, errorId})

  console.log(ariaDescribedBy)

  return (
    <div className={`govuk-form-group ${error ? 'govuk-form-group--error' : ''}`}>
      <label className="govuk-label" htmlFor={id}>{label}<LabelHidden>{labelHidden}</LabelHidden></label>
      <Hint id={hintId} hint={hint}/>
      <Error id={errorId} error={error}/>
      <input
        id={id}
        className={`govuk-input ${className} ${error ? 'govuk-input--error' : ''}`}
        name={name}
        type={type}
        aria-describedby={ariaDescribedBy}
        autoComplete="on"
        spellCheck="false"
        onChange={onChange}
        value={value}
      />
    </div>
  )
}
