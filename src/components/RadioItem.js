import React from 'react'

function Hint (props) {
  const { item } = props
  return !item.hint ? null : <span id={item.id} className="govuk-hint govuk-radios__hint">{item.hint}</span>
}

export default function RadioItem (props) {
  const { item } = props
  const { id, name, value, label, divider = null } = item
  if (divider) {
    return <div className="govuk-radios__divider">{divider}</div>
  }
  return (
      <div className="govuk-radios__item">
        <input className="govuk-radios__input" id={id} name={name} type="radio" value={value}/>
        <label className="govuk-label govuk-radios__label" htmlFor={id}>{label}</label>
        <Hint item={item}/>
      </div>
  )
}
