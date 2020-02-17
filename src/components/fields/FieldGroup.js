import React, { useState, useContext } from 'react'
import RadioItem from './RadioItem'
import FormContext from '../FormContext'
import Legend from '../Legend'
import Form from '../Form'

export default function FieldGroup (props) {
  const { children } = props

  return (
    <div className="govuk-form-group">
      {children}
    </div>
  )
}
