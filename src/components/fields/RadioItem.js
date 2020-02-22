import React from 'react'

function Hint (props) {
  const { id, item } = props
  return !item.hint ? null : <span id={id} className="govuk-hint govuk-radios__hint">{item.hint}</span>
}

export default function RadioItem (props) {
  const { item, value: currentValue, handleChange } = props
  const { id, name, value, label, divider = null, hint } = item
  if (divider) {
    return <div className="govuk-radios__divider">{divider}</div>
  }
  const hintId = hint ? `${id}-hint` : null
  return (
      <div className="govuk-radios__item">
        <input
          className="govuk-radios__input"
          id={id}
          name={name}
          type="radio"
          value={value}
          checked={currentValue === value}
          onChange={handleChange}
          aria-describedby={hintId}
        />
        <label className="govuk-label govuk-radios__label" htmlFor={id}>{label}</label>
        <Hint id={hintId} item={item}/>
      </div>
  )
}
