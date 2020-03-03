import React from 'react'
import './App.css'
import './application.scss'
import { BrowserRouter as Router} from 'react-router-dom'

import Header from './components/Header'
import PhaseBanner from './components/PhaseBanner'
import Footer from './components/Footer'
import Main from './components/Main'

import routes from './routes'

const serviceName = 'Frontend React App Experiment'
const phase = 'beta'
const feedbackLink = '/feedback'
const licenceLink = 'https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/'
const copyrightLink = 'https://www.nationalarchives.gov.uk/information-management/re-using-public-sector-information/uk-government-licensing-framework/crown-copyright/'

function App () {
  return (
    <div data-test="component-app">
      <Router>
        <a href="#main-content" className="govuk-skip-link">Skip to main content</a>
        <Header homeLink={routes.home.path} homeRoute={routes.home} serviceName={serviceName}/>
        <div className="govuk-width-container">
          <PhaseBanner phase={phase} feedbackLink={feedbackLink}/>
          <Main/>
        </div>
        <Footer licenceLink={licenceLink} copyrightLink={copyrightLink}/>
      </Router>
    </div>
  )
}

export default App
