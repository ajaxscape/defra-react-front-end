import React, {Children, cloneElement} from "react";

export default function FormWrapper(props) {
  const {children, errors, validate} = props
  const elements = Children.toArray(children).map((child) => {
    const {id, name} = child.props
    return cloneElement(child, {validate, error: errors[id || name]})
  })
  return (
    <div className='form-wrapper'>
      {elements}
    </div>
  )
}