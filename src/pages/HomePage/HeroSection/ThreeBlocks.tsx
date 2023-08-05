import { lazy, useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
// import { useWeb3Modal } from "@web3modal/react";
import { 
  useAccount, 
  useContractReads, 
  // useDisconnect, 
  // useNetwork, 
  // useSwitchNetwork 
} from "wagmi";
import Container from "../../../components/Container";
import useLoading from "../../../hooks/useLoading";
import api from "../../../utils/api";
import { CONTRACT_ABI } from "../../../utils/constants";

// -----------------------------------------------------------------------------------

const { VITE_CONTRACT_ADDRESS, VITE_CHAIN_ID } = import.meta.env

// -----------------------------------------------------------------------------------

const DialogTokenSale = lazy(() => import('./DialogTokenSale'))
const DialogTokenSaleForPartners = lazy(() => import('./DialogTokenSaleForPartners'))
const DialogAffiliate = lazy(() => import('./DialogAffiliate'))

// -----------------------------------------------------------------------------------

const contract: {} = {
  address: VITE_CONTRACT_ADDRESS,
  abi: CONTRACT_ABI,
  chainId: Number(VITE_CHAIN_ID)
}

// -----------------------------------------------------------------------------------

export default function ThreeBlocks() {
  // const { open } = useWeb3Modal()
  const { isConnected, address } = useAccount()
  // const { disconnect } = useDisconnect()
  // const { switchNetwork } = useSwitchNetwork()
  // const { chain } = useNetwork()
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

  // const openDialogTokenSale = () => {
  //   setDialogTokenSaleOpened(true)
  // }

  // const openDialogTokenSaleForPartners = () => {
  //   setDialogTokenSaleForPartnersOpened(true)
  // }

  // const openDialogAffiliate = () => {
  //   setDialogAffiliateOpened(true)
  // }

  //  Get the price of Ethereum in USD
  const getEthPriceInUsd = async () => {
    try {
      const data = await (await fetch('https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=BTC,USD,EUR')).json()
      setEthPriceInUsd(data['USD'])
    } catch (error) {
      console.log('>>>>>>> error => ', error)
    }
  }

  //  Get the price of Ethereum in USD per 10 minutes
  useEffect(() => {
    getEthPriceInUsd()
    const interval = setInterval(() => {
      getEthPriceInUsd();
    }, 600000);
    return () => clearInterval(interval);
  }, [])

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
    <>
      <div className="md:absolute w-full mt-12 md:mt-0 top-[80%] z-20">
        <Container className="px-0 md:px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-8 mb-8 md:mb-0">
            <div className="flex flex-col items-center justify-center gap-6 h-80 px-8 bg-white rounded-lg">
              <Link to="/about/campaigns">
                <img src="/assets/images/who_we_are_donate.png" alt="" />
              </Link>
              <Link to="/about/campaigns" className="font-extrabold text-center text-2xl">Give Donation</Link>
              <p className="text-gray-500 text-center">
                Your contribution used locally to help charitable causes and support the organization, Support.
              </p>
            </div>

            {/* Pre-sale */}
            {/* <div className="flex flex-col items-center gap-6 py-10 md:py-10 px-8 bg-primary rounded-none md:rounded-xl">
              <Icon icon="ph:wallet-fill" className="text-white text-6xl" />
              <h2 className="font-extrabold text-center text-2xl text-white">Pre-sale</h2>
              <div className="flex flex-col gap-4 w-full">
                <div className="flex flex-col gap-2">
                  <p className="text-sm text-center font-bold text-white">1 ECO = {tokenPriceInEth} ETH</p>
                </div>

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
            </div> */}

            <div className="flex flex-col items-center justify-center gap-6 h-80 bg-white px-8 rounded-lg">
              <a href="https://p2pb2b.com/trade/ECO_USDT/" target="_blank" className="flex flex-col items-center gap-6 font-extrabold text-center text-2xl">
                <img
                  src="/assets/images/logo_white.png"
                  alt="logo"
                  className="w-16"
                />
                Buy ECO Tokens
              </a>
              <p className="text-gray-500 text-center">
                Shape the world you want to live in through ECO Crypto Investments
              </p>
            </div>

            <div className="flex flex-col items-center justify-center h-80 gap-6 px-8 bg-white rounded-lg">
              <img src="/assets/images/hero_donate.png" alt="" />
              <h2 className="font-extrabold text-center text-2xl">Buy Carbon Credit</h2>
              <p className="text-gray-500 text-center">
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
    </>
  )
}