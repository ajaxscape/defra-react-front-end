import React from 'react'
import Error from './Error'
import Hint from './Hint'
import ariaDescribedBy from '../attributes/ariaDescribedBy'

function LabelHidden (props) {
  const { children } = props
  return !children ? null : <span className="govuk-visually-hidden">{children}</span>
}

export default function TextInput (props) {
  const { id, name = id, value = '', type = 'text', label = null, labelHidden = null, hint = null, className = '', error = null, handleChange = null } = props

  return (
    <div className={`govuk-form-group ${error ? 'govuk-form-group--error' : ''}`}>
      <label className="govuk-label" htmlFor={id}>{label}<LabelHidden>{labelHidden}</LabelHidden></label>
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
