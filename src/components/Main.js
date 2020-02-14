import React from 'react'
import { Switch, Route } from 'react-router-dom'

import routes from '../routes'

export default function Main () {
  return (
    <main className="govuk-main-wrapper" id="main-content" role="main">
      <Switch>
        {Object.values(routes).map((route, index) => {
          return <Route key={index}
            path={route.path}
            exact
            render={(props) => {
              const nextLink = route.next && routes[route.next].path
              return <route.component {...{ ...props, route, nextLink }} />
            }}
          />
        })}
      </Switch>
    </main>
  )
}
