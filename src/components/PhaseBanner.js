import React from 'react'

export default function Header (props) {
  const { phase = '', feedbackLink = '#' } = props
  if (!phase) {
    return null
  }
  return (
    <div className="govuk-phase-banner">
      <p className="govuk-phase-banner__content">
        <strong className="govuk-tag govuk-phase-banner__content__tag">
          {phase}
        </strong>
        <span className="govuk-phase-banner__text">
          This is a new service – your <a className="govuk-link" href={feedbackLink}>feedback</a> will help us to improve it.
        </span>
      </p>
    </div>
  )
}
