import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'

import App from './App'
import PhaseBanner from './components/PhaseBanner'
import { Router } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'

Enzyme.configure({adapter: new EnzymeAdapter() })

test('Renders the App without crashing', () => {
  shallow(<App/>)
})

test('Renders the Header component', () => {
  shallow(<Header/>)
})

test('Renders the Footer component', () => {
  shallow(<Footer/>)
})

test('Renders the Main component', () => {
  shallow(<Main/>)
})

test('Renders the PhaseBanner component', () => {
  shallow(<PhaseBanner/>)
})
