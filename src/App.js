import React from 'react'
import './App.css'
import './application.scss'
import Header from './components/Header'
import PhaseBanner from './components/PhaseBanner'
import Footer from './components/Footer'

const serviceName = 'Frontend React App Experiment'
const phase = 'beta'
const feedbackLink = '/feedback'

function App () {
  return (
    <div>
      <a href="#main-content" className="govuk-skip-link">Skip to main content</a>
      <Header serviceName={serviceName} phase={phase}/>
      <div className="govuk-width-container">
        <PhaseBanner phase={phase} feedbackLink={feedbackLink}/>
        <main className="govuk-main-wrapper" id="main-content" role="main">
        </main>
      </div>
      <Footer/>
    </div>
  )
}

export default App
