import React, { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Web3Modal } from "@web3modal/react";
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum';
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { mainnet, goerli } from 'wagmi/chains'
import { AlertMessageProvider } from './contexts/AlertMessageContext'
import { LoadingProvider } from './contexts/LoadingContext'
import { MobileMenuProvider } from './contexts/MobileMenuContext'
import Routes from './Routes'
import Loading from './components/Loading'
import { AffiliateProvider } from './contexts/AffiliateContext';

// -----------------------------------------------------------------------------------

const projectId = import.meta.env.VITE_WALLET_CONNECT_PROJECT_ID
const chains = [mainnet, goerli]

const { provider, webSocketProvider } = configureChains(chains, [w3mProvider({
  projectId
})])

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
    <>
      <Suspense fallback={<Loading />}>
        <BrowserRouter>
          <WagmiConfig client={wagmiClient}>
            <AlertMessageProvider>
              <LoadingProvider>
                <MobileMenuProvider>
                  <AffiliateProvider>
                    <Routes />
                  </AffiliateProvider>
                </MobileMenuProvider>
              </LoadingProvider>
            </AlertMessageProvider>
          </WagmiConfig>
        </BrowserRouter>
      </Suspense>
      <Web3Modal
        projectId={projectId}
        ethereumClient={ethereumClient}
        explorerRecommendedWalletIds={[
          '8a0ee50d1f22f6651afcae7eb4253e52a3310b90af5daef78a8c4929a9bb99d4',
          '4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0'
        ]}
      />
    </>
  )
}

export default App
