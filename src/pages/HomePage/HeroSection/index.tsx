import React, { lazy, useEffect, useMemo, useState } from "react"
import { Button, Progress } from "@material-tailwind/react"
import { useWeb3Modal } from "@web3modal/react"
import { useAccount, useDisconnect, useSwitchNetwork, useNetwork, useContractReads } from "wagmi"
import { useMediaQuery } from 'react-responsive';
import { Link } from "react-router-dom"
import { Icon } from "@iconify/react"
import Container from "../../../components/Container"
import TinyDashedBar from "../../../components/TinyDashedBar"
import DialogAffiliate from "./DialogAffiliate";
import useLoading from "../../../hooks/useLoading";
import api from "../../../utils/api";
import { CONTRACT_ABI, NUMBER_OF_PURCHASED_TOKENS_BY_CASH, varFadeInDown, varFadeInLeft, varFadeInRight, varFadeInUp } from "../../../utils/constants";
import { getVisibleAmount } from "../../../utils/functions";
import MotionDiv from "../../../components/MotionDiv";

// -----------------------------------------------------------------------------------

const { VITE_CONTRACT_ADDRESS, VITE_CHAIN_ID } = import.meta.env

// -----------------------------------------------------------------------------------

const DialogTokenSale = lazy(() => import('./DialogTokenSale'))
const DialogTokenSaleForPartners = lazy(() => import('./DialogTokenSaleForPartners'))

// -----------------------------------------------------------------------------------

const contract: {} = {
  address: VITE_CONTRACT_ADDRESS,
  abi: CONTRACT_ABI,
  chainId: Number(VITE_CHAIN_ID)
}

// -----------------------------------------------------------------------------------

export default function HeroSection() {
  const { open } = useWeb3Modal()
  const { isConnected, address } = useAccount()
  const { disconnect } = useDisconnect()
  const { switchNetwork } = useSwitchNetwork()
  const { chain } = useNetwork()
  const isMobile = useMediaQuery({ maxWidth: 480 });
  const isTablet = useMediaQuery({ minWidth: 480, maxWidth: 768 });
  const isLaptop = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const isDesktop = useMediaQuery({ minWidth: 1024, maxWidth: 1280 });
  const { openLoading, closeLoading } = useLoading()

  const [dialogTokenSaleOpened, setDialogTokenSaleOpened] = useState<boolean>(false)
  const [dialogTokenSaleForPartnersOpened, setDialogTokenSaleForPartnersOpened] = useState<boolean>(false)
  const [dialogAffiliateOpened, setDialogAffiliateOpened] = useState<boolean>(false)
  const [affiliateLink, setAffiliateLink] = useState<string>('')
  const [totalTokenAmount, setTotalTokenAmount] = useState<number>(0)
  const [mintableTokenAmount, setMintableTokenAmount] = useState<number>(0)
  const [tokenPriceInEth, setTokenPriceInEth] = useState<number>(0)
  const [ethPriceInUsd, setEthPriceInUsd] = useState<number>(0)

  //  Get essential values from contract
  const { isLoading: contractReadsLoading } = useContractReads({
    contracts: [
      {
        ...contract,
        functionName: 'INIT_TOTAL_SUPPLY'
      },
      {
        ...contract,
        functionName: 'SHARE_OF_PRIVATE_SALE'   //  Replace
      },
      {
        ...contract,
        functionName: 'mintableTokenAmountForPrivate' //  Replace
      },
      {
        ...contract,
        functionName: 'tokenPriceForPrivate'   // Replace
      },
    ],

    watch: true,

    onSuccess: (data: Array<any>) => {
      const totalSupply = parseInt(data[0]._hex) / 1e18
      setTotalTokenAmount(totalSupply * data[1] / 1000)
      setMintableTokenAmount(parseInt(data[2]._hex) / 1e18)
      setTokenPriceInEth(parseInt(data[3]._hex) / 1e18)
      // closeLoading()
    }
  })

  useEffect(() => {
    if (address) {
      openLoading()
      api.get(`/affiliate/get-affiliate-link/${address}`)
        .then(response => {
          setAffiliateLink(response.data)
          closeLoading()
        })
        .catch(error => {
          closeLoading()
        })
    }
  }, [address])

  useEffect(() => {
    if (contractReadsLoading) {
      // openLoading()
    }
  }, [contractReadsLoading])

  const openDialogTokenSale = () => {
    setDialogTokenSaleOpened(true)
  }

  const openDialogTokenSaleForPartners = () => {
    setDialogTokenSaleForPartnersOpened(true)
  }

  const openDialogAffiliate = () => {
    setDialogAffiliateOpened(true)
  }

  //  Get the price of Ethereum in USD
  const getEthPriceInUsd = async () => {
    try {
      const data = await (await fetch('https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=BTC,USD,EUR')).json()
      setEthPriceInUsd(data['USD'])
    } catch (error) {
      console.log('>>>>>>> error => ', error)
    }
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

  //  Get the price of Ethereum in USD per 10 minutes
  useEffect(() => {
    getEthPriceInUsd()
    const interval = setInterval(() => {
      getEthPriceInUsd();
    }, 600000);
    return () => clearInterval(interval);
  }, [])

  return (
    <header className="relative bg-[#0F0F0F] md:pt-28 md:pb-28 pt-28 pb-0" id="hero">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          <div className="flex flex-col gap-4 items-center lg:items-start">
            {/* <div className="certik-emble" data-id="d7c95667">
              <a 
                href="https://skynet.certik.com/projects/green-planet-eco?utm_source=SkyEmblem&utm_campaign=green-planet-eco&utm_medium=link"
              >View project at certik.com</a>
            </div> */}
            <MotionDiv variants={varFadeInUp}>
              <a
                href="https://skynet.certik.com/projects/green-planet-eco?utm_source=SkyEmblem&utm_campaign=green-planet-eco&utm_medium=link" target="_blank"
              >
                <img src="/assets/images/certificate.png" alt="certik" />
              </a>
            </MotionDiv>

            <MotionDiv variants={varFadeInLeft}>
              <h1 className="text-primary uppercase font-extrabold text-4xl md:text-6xl text-center md:text-left !leading-tight">
                Green Planet Eco AI
              </h1>
            </MotionDiv>

            <MotionDiv variants={varFadeInLeft}>
              <p className="text-white capitalize font-semibold text-xl md:text-2xl leading-8 md:leading-10 text-center md:text-left">
                The key to a sustainable future.
              </p>
            </MotionDiv>

            <MotionDiv variants={varFadeInDown}>
              <TinyDashedBar />
            </MotionDiv>

            <div className="mt-8 flex items-center gap-3">
              <MotionDiv variants={varFadeInLeft}>
                <Button className="bg-primary shadow-none text-base capitalize rounded-full px-6 md:px-12 hover:shadow-primary">
                  <Link to="/learn">
                    Read More
                  </Link>
                </Button>
              </MotionDiv>

              <MotionDiv variants={varFadeInRight}>
                <Button
                  className="border-primary border-2 bg-transparent shadow-none text-base capitalize rounded-full px-5 md:px-10 hover:shadow-primary"
                  disabled={!isConnected}
                  onClick={openDialogAffiliate}
                >
                  Affiliate Link
                </Button>
              </MotionDiv>
            </div>
          </div>

          <div className="hidden lg:block">
            <MotionDiv variants={varFadeInUp}>
              <img src="/assets/images/hero.jpg" alt="hero" />
            </MotionDiv>
          </div>

          <div className="flex justify-center lg:hidden my-12">
            <MotionDiv variants={varFadeInUp}>
              <a
                target="_blank"
                href="https://app.companiesoffice.govt.nz/companies/app/ui/pages/companies/companyBadgeSnippet/8745289?utm_campaign=companiesdirectlinks&utm_medium=webpage&utm_source=thecompany"
              >
                <img src="https://app.companiesoffice.govt.nz/companies/app/ui/themes/companies/images/CO_Details_light_optimal_WEB.png" alt="Company" />
              </a>
            </MotionDiv>
          </div>
        </div>
      </Container>

      <div className="md:absolute w-full mt-12 md:mt-0">
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

            {/* Pre-sale */}
            <div className="flex flex-col items-center gap-6 py-10 md:py-10 px-8 bg-primary rounded-none md:rounded-xl">
              <Icon icon="ph:wallet-fill" className="text-white text-6xl" />
              <h2 className="font-extrabold text-center text-2xl text-white">Pre-sale</h2>
              <div className="flex flex-col gap-4 w-full">
                {/* title - Replace */}
                <div className="flex flex-col gap-2">
                  <p className="text-sm text-center font-bold text-white">1 ECO = {tokenPriceInEth} ETH</p>
                </div>

                {/* Progress bar */}
                <div className="flex flex-col gap-2">
                  <Progress
                    value={(totalTokenAmount - mintableTokenAmount + NUMBER_OF_PURCHASED_TOKENS_BY_CASH) / totalTokenAmount * 100}
                    className="h-3 rounded-lg bg-gray-300"
                    barProps={{
                      className: 'bg-primary h-3 rounded-lg bg-gray-900'
                    }}
                  />
                  <div className="flex justify-between items-center">
                    <p className="text-sm text-white">
                      Sold:<br />
                      <span className="text-white font-bold">
                        {getVisibleAmount(totalTokenAmount - mintableTokenAmount + NUMBER_OF_PURCHASED_TOKENS_BY_CASH)}
                      </span> ECO<br />
                      ($<span className="text-white font-bold">
                        {getVisibleAmount((totalTokenAmount - mintableTokenAmount + NUMBER_OF_PURCHASED_TOKENS_BY_CASH) * tokenPriceInEth * ethPriceInUsd)}
                      </span> USD)
                    </p>
                    <p className="text-sm text-white">
                      Total:<br />
                      <span className="font-bold">{getVisibleAmount(totalTokenAmount)}</span> ECO<br />
                      ($<span className="text-white font-bold">
                        {getVisibleAmount(totalTokenAmount * tokenPriceInEth * ethPriceInUsd)}
                      </span> USD)
                    </p>
                  </div>
                </div>

                <p className="text-sm text-center text-gray-300">
                  Next price: <span className="font-bold">1 ECO = 0.00004 ETH</span>
                </p>
              </div>
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
            totalTokenAmount={totalTokenAmount}
            mintableTokenAmount={mintableTokenAmount}
            tokenPriceInEth={tokenPriceInEth}
            ethPriceInUsd={ethPriceInUsd}
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
            affiliateLink={affiliateLink}
          />
        </>
      )}
    </header>
  )
}