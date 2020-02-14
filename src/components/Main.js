import React from 'react'
import { Switch, Route } from 'react-router-dom'

import routes from '../routes'

export default function Main () {
  return (
    <main className="govuk-main-wrapper" id="main-content" role="main">
      <Switch>
        {Object.values(routes).map((route) => {
          return <Route path={route.path} render={(props) => {
            const myProps = {...props, route}
            return <route.component {...myProps} />
          }}/>
        })}
      </Switch>
    </main>
  )
}
