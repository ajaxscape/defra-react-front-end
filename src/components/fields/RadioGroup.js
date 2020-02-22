import React, { useState, useContext } from 'react'
import RadioItem from './RadioItem'

function Hint (props) {
  const { id, hint } = props
  return !hint ? null : <span id={id} className="govuk-hint">{hint}</span>
}

function Error (props) {
  const { id, error } = props
  return !error ? null : <span id={id} className="govuk-error-message"><span className="govuk-visually-hidden">Error:</span> {error}</span>
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

export default function RadioGroup (props) {
  const { name = '', items = [], value: initialValue, hint = null, error = null } = props
  const hintId = hint ? `${name}-hint` : null
  const errorId = error ? `${name}-error` : null

  const ariaDescribedBy = getAriaDescribedBy({hintId, errorId})
  const [value, setValue] = useState(initialValue)

  function onChange (e) {
    setValue(e.target.value)
  }

  return (
    <div callName="radio-wrapper">
      <Hint id={hintId} hint={hint}/>
      <Error id={errorId} error={error}/>
      <div className="govuk-radios">
        {items.map((item, index) => {
          const id = index ? `${name}-${index + 1}` : name
          return <RadioItem key={index} item={{ id, name, ...item }} onChange={onChange} value={value}/>
        })}
      </div>
    </div>
  )
}
