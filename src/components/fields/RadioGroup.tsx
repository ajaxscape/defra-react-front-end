import React, {useState, useContext, ChangeEvent} from 'react'
import RadioItem from './RadioItem'
import FormContext from '../FormContext'
import Hint from './Hint'
import Error from './Error'

interface Item {
  id: string;
  name: string;
  value: any;
  label: string | null;
  divider: string | null;
  hint: string | undefined;
}

interface Props {
  name: string;
  items: [];
  value: string;
  error: string | null;
  hint: string | null;
}

export default function RadioGroup({name = '', items = [], value: initialValue, error = null, hint = null}: Props) {
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
      <Hint id={name} hint={hint} className={null}/>
      <Error id={name} error={error}/>
      <div className="govuk-radios">
        {items.map((item: Item, index: number) => {
          const id = index ? `${name}-${index + 1}` : name
          return <RadioItem key={index} item={{id, name, ...item}} error={null} handleChange={handleChange}
                            value={value}/>
        })}
      </div>
    </div>
  )
}
