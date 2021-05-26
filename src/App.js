import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { QueryParamProvider } from 'use-query-params'
import { QueryClient, QueryClientProvider } from 'react-query'

import { GlobalStyle } from 'utils/styles'
import StyleProvider from 'components/providers/StyleProvider'
import ModalProvider from 'components/providers/ModalProvider'
import UXProvider from 'components/providers/UXProvider'
import TransportationProvider from 'components/providers/TransportationProvider'
import SearchProvider from 'components/providers/SearchProvider'

import CO2EModal from 'components/modals/CO2EModal'
import FootprintModal from 'components/modals/FootprintModal'
import PerimeterModal from 'components/modals/PerimeterModal'
import InstallInstructionsModal from 'components/modals/InstallInstructionsModal'
import Web from 'components/layout/Web'
import Iframe from 'components/layout/Iframe'
import Comparator from 'views/Comparator'

const queryClient = new QueryClient()

function App() {
  return (
    <Router>
      <QueryParamProvider ReactRouterRoute={Route}>
        <QueryClientProvider client={queryClient}>
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
                    <PerimeterModal />
                    <InstallInstructionsModal />
                  </SearchProvider>
                </TransportationProvider>
              </ModalProvider>
            </StyleProvider>
          </UXProvider>
        </QueryClientProvider>
      </QueryParamProvider>
    </Router>
  )
}

export default App
