import React, { lazy, useMemo, useState } from "react"
import { Button, Dialog } from "@material-tailwind/react"
import { useWeb3Modal } from "@web3modal/react"
import { useAccount, useDisconnect, useSwitchNetwork, useNetwork } from "wagmi"
import { useMediaQuery } from 'react-responsive';
import { Link } from "react-router-dom"
import { Icon } from "@iconify/react"
import Container from "../../../components/Container"
import TinyDashedBar from "../../../components/TinyDashedBar"
import DialogAffiliate from "./DialogAffiliate";

const { VITE_CHAIN_ID } = import.meta.env

// -----------------------------------------------------------------------------------

const DialogTokenSale = lazy(() => import('./DialogTokenSale'))
const DialogTokenSaleForPartners = lazy(() => import('./DialogTokenSaleForPartners'))

// -----------------------------------------------------------------------------------

export default function HeroSection() {
  const { open } = useWeb3Modal()
  const { isConnected } = useAccount()
  const { disconnect } = useDisconnect()
  const { switchNetwork } = useSwitchNetwork()
  const { chain } = useNetwork()
  const isMobile = useMediaQuery({ maxWidth: 480 });
  const isTablet = useMediaQuery({ minWidth: 480, maxWidth: 768 });
  const isLaptop = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const isDesktop = useMediaQuery({ minWidth: 1024, maxWidth: 1280 });

  const [dialogTokenSaleOpened, setDialogTokenSaleOpened] = useState<boolean>(false)
  const [dialogTokenSaleForPartnersOpened, setDialogTokenSaleForPartnersOpened] = useState<boolean>(false)
  const [dialogAffiliateOpened, setDialogAffiliateOpened] = useState<boolean>(false)

  const openDialogTokenSale = () => {
    setDialogTokenSaleOpened(true)
  }

  const openDialogTokenSaleForPartners = () => {
    setDialogTokenSaleForPartnersOpened(true)
  }

  const openDialogAffiliate = () => {
    setDialogAffiliateOpened(true)
  }

  /* ---------- Set the width of dialog by the screen size --------- */

  const sizeOfDialog = useMemo(() => {
    if (isMobile) {
      return 'xxl';
    }
    if (isTablet) {
      return 'xl';
    }
    if (isLaptop) {
      return 'md';
    }
    if (isDesktop) {
      return 'sm';
    }
    return 'xs';
  }, [isMobile, isTablet, isLaptop]);

  /* --------------------------------------------------------------- */

  return (
    <div className="relative bg-[#0F0F0F] md:pt-28 md:pb-28 pt-28 pb-0" id="hero">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          <div className="flex flex-col gap-4 items-center md:items-start">
            {/* <div className="certik-emble" data-id="d7c95667">
              <a 
                href="https://skynet.certik.com/projects/green-planet-eco?utm_source=SkyEmblem&utm_campaign=green-planet-eco&utm_medium=link"
              >View project at certik.com</a>
            </div> */}
            <a
              href="https://skynet.certik.com/projects/green-planet-eco?utm_source=SkyEmblem&utm_campaign=green-planet-eco&utm_medium=link" target="_blank"
            >
              <img src="/assets/images/certik-logotype-h-w.svg" alt="certik" />

            </a>

            <h1 className="text-primary uppercase font-extrabold text-4xl md:text-6xl text-center md:text-left">Save the World</h1>
            <p className="text-white capitalize font-semibold text-xl md:text-2xl leading-8 md:leading-10 text-center md:text-left">
              Green Planet Eco - the key to a sustainable future.
            </p>
            <TinyDashedBar />

            <div className="mt-8 flex items-center gap-3">
              <Button className="bg-primary shadow-none text-base capitalize rounded-full px-6 md:px-12 hover:shadow-primary">
                <Link to="/learn">
                  Read More
                </Link>
              </Button>

              <Button
                className="border-primary border-2 bg-transparent shadow-none text-base capitalize rounded-full px-5 md:px-10 hover:shadow-primary"
                disabled={!isConnected}
                onClick={openDialogAffiliate}
              >
                Invite Friend
              </Button>
            </div>
          </div>

          <div className="hidden md:block">
            <img src="/assets/images/hero.jpg" alt="hero" />
          </div>
        </div>
      </Container>

      <div className="md:absolute w-full mt-24 md:mt-0">
        <Container className="px-0 md:px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 items-center">
            <div className="flex flex-col items-center gap-6 py-10 md:py-20 px-8 bg-white">
              <Link to="/about/campaigns">
                <img src="/assets/images/who_we_are_donate.png" alt="" />
              </Link>
              <Link to="/about/campaigns" className="font-extrabold text-center text-2xl">Give Donation</Link>
              <p className="text-gray-400 text-center">
                Your contribution used locally to help charitable causes and support the organization, Support.
              </p>
            </div>

            <div className="flex flex-col items-center gap-6 py-10 md:py-28 px-8 bg-primary rounded-none md:rounded-xl">
              <Icon icon="ph:wallet-fill" className="text-white text-6xl" />
              <h2 className="font-extrabold text-center text-2xl text-white">Buy Crypto</h2>
              {isConnected ? chain?.id === Number(VITE_CHAIN_ID) ? (
                <>
                  <div className="flex reverse flex-row md:flex-col-reverse lg:flex-row items-center justify-center gap-2">
                    <Button
                      className="bg-gray-900 hover:bg-gray-900 text-white rounded shadow-none hover:shadow-none"
                      onClick={() => disconnect()}
                    >Disconnect</Button>
                    <Button
                      className="bg-gray-100 hover:bg-gray-100 text-green-600 rounded shadow-none hover:shadow-none"
                      onClick={openDialogTokenSale}
                    >Purchase</Button>
                  </div>
                  <Button
                    variant="text"
                    className="normal-case font-normal text-white text-sm p-0"
                    onClick={openDialogTokenSaleForPartners}
                  >Are you our partner? Click here.</Button>
                </>
              ) : (
                <div className="flex reverse flex-row md:flex-col-reverse lg:flex-row items-center justify-center gap-2">
                  <Button
                    className="bg-gray-900 hover:bg-gray-900 text-white rounded shadow-none hover:shadow-none"
                    onClick={() => disconnect()}
                  >Disconnect</Button>
                  <Button
                    className="bg-gray-100 hover:bg-gray-100 text-green-600 rounded shadow-none hover:shadow-none"
                    onClick={() => switchNetwork?.(Number(VITE_CHAIN_ID))}
                  >Switch Network</Button>
                </div>
              ) : (
                <Button
                  className="bg-gray-900 hover:bg-gray-900 text-white rounded shadow-none hover:shadow-none"
                  onClick={() => open()}
                >Connect Wallet</Button>
              )}
            </div>

            <div className="flex flex-col items-center gap-6 py-10 md:py-16 lg:py-20 px-8 bg-white">
              <img src="/assets/images/hero_donate.png" alt="" />
              <h2 className="font-extrabold text-center text-2xl">Buy Carbon Credit</h2>
              <p className="text-gray-400 text-center">
                Buying carbon credits is a way for individuals or organizations to offset their carbon footprint.
              </p>
            </div>
          </div>
        </Container>
      </div>

      {isConnected && (
        <>
          <DialogTokenSale
            dialogOpened={dialogTokenSaleOpened}
            setDialogOpened={setDialogTokenSaleOpened}
            sizeOfDialog={sizeOfDialog}
          />
          <DialogTokenSaleForPartners
            dialogOpened={dialogTokenSaleForPartnersOpened}
            setDialogOpened={setDialogTokenSaleForPartnersOpened}
            sizeOfDialog={sizeOfDialog}
          />
          <DialogAffiliate
            dialogOpened={dialogAffiliateOpened}
            setDialogOpened={setDialogAffiliateOpened}
            sizeOfDialog={sizeOfDialog}
          />
        </>
      )}


    </div>
  )
}