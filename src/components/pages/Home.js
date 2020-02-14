import React from 'react'
import { Link } from 'react-router-dom'

export default function Home (props) {
  const { nextLink } = props
  return (
    <div>
      <h1>Hello World</h1>
      <Link to = {nextLink}>Next</Link>
    </div>
  )
}
