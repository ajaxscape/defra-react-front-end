import React from 'react'
import Hint from './Hint'
import ariaDescribedBy from '../attributes/ariaDescribedBy'

interface Item {
  id: string;
  name: string;
  value: any;
  label: string | null;
  divider: string | null;
  hint: string | undefined;
}

interface Props {
  item: Item;
  value: string;
  error: string | null;
  handleChange: any;
}

export default function RadioItem({item, value: currentValue, error, handleChange}: Props) {
  const {id, name, value, label, divider = null, hint = ''} = item
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
        checked={currentValue === value}
        onChange={handleChange}
        aria-describedby={ariaDescribedBy({id, name, hint, error})}
      />
      <label className="govuk-label govuk-radios__label" htmlFor={id}>{label}</label>
      <Hint id={id} hint={hint} className="govuk-radios__hint"/>
    </div>
  )
}
