import React from 'react'
import { Switch, Route } from 'react-router-dom'

import AppContext from './AppContext'
import useAppData from './hooks/useAppData'

import routes from '../routes'

export default function Main () {
  const appData = useAppData()

  return (
    <AppContext.Provider value={appData}>
      <main className="govuk-main-wrapper" id="main-content" role="main">
        <div className="govuk-grid-row">
          <div className="govuk-grid-column-two-thirds">
            <Switch>
              {Object.values(routes).map((route, index) => {
                return <Route key={index}
                  path={route.path}
                  exact
                  render={(props) => {
                    const nextLink = route.next && routes[route.next].path
                    return <route.component {...{ ...props, route, nextLink, appData }} />
                  }}
                />
              })}
            </Switch>
          </div>
        </div>
      </main>
    </AppContext.Provider>
  )
}
