import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { QueryParamProvider } from 'use-query-params'

import { GlobalStyle } from 'utils/styles'
import StyleProvider from 'components/providers/StyleProvider'
import ModalProvider from 'components/providers/ModalProvider'
import UXProvider from 'components/providers/UXProvider'
import TransportationProvider from 'components/providers/TransportationProvider'
import SearchProvider from 'components/providers/SearchProvider'

import CO2EModal from 'components/modals/CO2EModal'
import FootprintModal from 'components/modals/FootprintModal'
import Web from 'components/layout/Web'
import Iframe from 'components/layout/Iframe'
import Comparator from 'views/Comparator'

function App() {
  return (
    <Router>
      <QueryParamProvider ReactRouterRoute={Route}>
        <UXProvider>
          <StyleProvider>
            <ModalProvider>
              <TransportationProvider>
                <SearchProvider>
                  <GlobalStyle />
                  <Switch>
                    <Route path='/embed'>
                      <Iframe>
                        <Comparator iframe />
                      </Iframe>
                    </Route>
                    <Route>
                      <Web>
                        <Switch>
                          <Route path='/'>
                            <Comparator />
                          </Route>
                        </Switch>
                      </Web>
                    </Route>
                  </Switch>
                  <CO2EModal />
                  <FootprintModal />
                </SearchProvider>
              </TransportationProvider>
            </ModalProvider>
          </StyleProvider>
        </UXProvider>
      </QueryParamProvider>
    </Router>
  )
}

export default App
