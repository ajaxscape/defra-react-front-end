import React, {useContext, useState} from 'react'
import FormContext from '../FormContext'
import Error from './Error'
import Hint from './Hint'
import VisuallyHidden from './VisuallyHidden'
import ariaDescribedBy from '../attributes/ariaDescribedBy'

interface Props {
  id: string;
  name: string;
  value: string;
  error: string | null;
  type: string;
  label: string | null;
  labelHidden: string | null;
  hint: string | null;
  className: string | null;
}

export default function TextInput({id, name = id, value: initialValue, error = null, type = 'text', label = null, labelHidden = null, hint = null, className = ''}: Props) {

  const [value, setValue] = useState(initialValue)

  // @ts-ignore
  const {data, setFormData} = useContext(FormContext)

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.persist()
    const {value} = e.target
    setValue(value)
  }

  setFormData({...data, [name]: value})

  return (
    <div className={`govuk-form-group ${error ? 'govuk-form-group--error' : ''}`}>
      <label className="govuk-label" htmlFor={id}>{label}<VisuallyHidden>{labelHidden}</VisuallyHidden></label>
      <Hint id={id} hint={hint} className={null}/>
      <Error id={id} error={error}/>
      <input
        id={id}
        className={`govuk-input ${className} ${error ? 'govuk-input--error' : ''}`}
        name={name}
        type={type}
        aria-describedby={ariaDescribedBy({id, name, hint, error})}
        autoComplete="on"
        spellCheck="false"
        onChange={handleChange}
        value={value}
      />
    </div>
  )
}
