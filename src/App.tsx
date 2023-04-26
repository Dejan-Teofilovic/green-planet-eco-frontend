import React, { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Web3Modal } from "@web3modal/react";
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum';
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { mainnet } from 'wagmi/chains'
import { AlertMessageProvider } from './contexts/AlertMessageContext'
import { LoadingProvider } from './contexts/LoadingContext'
import { MobileMenuProvider } from './contexts/MobileMenuContext'
import Routes from './Routes'
import Loading from './components/Loading'

// -----------------------------------------------------------------------------------

const projectId = import.meta.env.VITE_WALLET_CONNECT_PROJECT_ID
const chains = [mainnet]

const { provider, webSocketProvider } = configureChains(chains, [w3mProvider({ projectId })])

const wagmiClient = createClient({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, version: 1, chains }),
  provider,
  webSocketProvider
})

// Web3Modal Ethereum Client
const ethereumClient = new EthereumClient(wagmiClient, chains);

// -----------------------------------------------------------------------------------

function App() {
  return (
    <BrowserRouter>
      <WagmiConfig client={wagmiClient}>
        <AlertMessageProvider>
          <LoadingProvider>
            <MobileMenuProvider>
              <Suspense fallback={<Loading />}>
                <Routes />
              </Suspense>
            </MobileMenuProvider>
          </LoadingProvider>
        </AlertMessageProvider>
      </WagmiConfig>
      <Web3Modal
        projectId={projectId}
        ethereumClient={ethereumClient}
      />
    </BrowserRouter>
  )
}

export default App
