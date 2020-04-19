import React, {Children, cloneElement, DetailedReactHTMLElement, ReactChildren, ReactElement} from "react";

interface Props {
  children: ReactChildren;
  errors: []
  validate: () => {}
}

export default function FormWrapper({children, errors, validate}: Props) {
  const elements = Children.toArray(children).map((child) => {
    return child
    // const {id, name} = child
    // return cloneElement(child, {validate, error: errors[id || name]})
  })
  return (
    <div className='form-wrapper'>
      {elements}
    </div>
  )
}