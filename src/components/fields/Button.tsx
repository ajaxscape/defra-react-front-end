import React, {ReactChildren} from 'react'

interface Props {
  children: string;
}

export default function Button({children}: Props) {
  return (
    <button className="govuk-button" data-module="govuk-button">
      {children}
    </button>
  )
}
