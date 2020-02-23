import React from 'react'
import Hint from './Hint'
import ariaDescribedBy from '../attributes/ariaDescribedBy'

export default function RadioItem (props) {
  const { item, checked, error, handleChange } = props
  const { id, name, value, label, divider = null, hint } = item
  if (divider) {
    return <div className="govuk-radios__divider">{divider}</div>
  }
  return (
      <div className="govuk-radios__item">
        <input
          className="govuk-radios__input"
          id={id}
          name={name}
          type="radio"
          value={value}
          checked={checked}
          onChange={handleChange}
          aria-describedby={ariaDescribedBy({id, name, hint, error})}
        />
        <label className="govuk-label govuk-radios__label" htmlFor={id}>{label}</label>
        <Hint id={id} hint={hint} className="govuk-radios__hint"/>
      </div>
  )
}
