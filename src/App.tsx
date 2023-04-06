import React, { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AlertMessageProvider } from './contexts/AlertMessageContext'
import { LoadingProvider } from './contexts/LoadingContext'
import { MobileMenuProvider } from './contexts/MobileMenuContext'
import Routes from './Routes'
import Loading from './components/Loading'

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <AlertMessageProvider>
          <LoadingProvider>
            <MobileMenuProvider>
              <Routes />
            </MobileMenuProvider>
          </LoadingProvider>
        </AlertMessageProvider>
      </BrowserRouter>
    </Suspense>
  )
}

export default App
