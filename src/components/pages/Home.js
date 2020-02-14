import React from 'react'
import { Link } from 'react-router-dom'
import routes from '../../routes'

export default function Home (props) {
  const { route = {} } = props
  return (
    <div>
      <h1>Hello World</h1>
      <Link to = {routes[route.next].path}>Next</Link>
    </div>
  )
}
