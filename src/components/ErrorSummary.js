import React from 'react'

function ErrorLine (props) {
  const { id, message } = props.error
  return (
    <li>
      <a href={`#${id}`}>{message}</a>
    </li>
  )
}

export default function ErrorSummary (props) {
  const { errors } = props
  const errorList = Object.entries(errors).map(([id, message]) => {
    return { id, message }
  })
  return !Object.keys(errors).length ? null : (
    <div className="govuk-error-summary" aria-labelledby="error-summary-title"
         role="alert" tabIndex="-1" data-module="govuk-error-summary">
      <h2 className="govuk-error-summary__title" id="error-summary-title">
        There is a problem
      </h2>
      <div className="govuk-error-summary__body">
        <ul className="govuk-list govuk-error-summary__list">
          {errorList.map((error, index) => {
            return <ErrorLine  key={index} error={error}/>
          })}
        </ul>
      </div>
    </div>
  )
}
