import React from 'react'
import { Link } from 'react-router-dom'

export default function WhoOwnsItem (props) {
  const { nextLink } = props
  return (
    <div>
      <h1>My Item</h1>
      <Link to = {nextLink}>Next</Link>
    </div>
  )
}
