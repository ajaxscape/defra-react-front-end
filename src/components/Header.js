import React from 'react'
import Logo from './Logo'

export default function Header (props) {
  const { serviceName = '', homeLink = '/' } = props
  return (
    <header className="govuk-header " role="banner" data-module="govuk-header">
      <div className="govuk-header__container govuk-width-container">
        <div className="govuk-header__logo">
          <a href={homeLink} className="govuk-header__link govuk-header__link--homepage">
            <span className="govuk-header__logotype">
              <Logo/>
              <span className="govuk-header__logotype-text">
                GOV.UK
              </span>
            </span>
          </a>
        </div>
        <div className="govuk-header__content">
          <a href={homeLink} className="govuk-header__link govuk-header__link--service-name">{serviceName}</a>
        </div>
      </div>
    </header>
  )
}
