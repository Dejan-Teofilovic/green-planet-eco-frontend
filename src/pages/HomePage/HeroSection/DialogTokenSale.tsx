import React, { ChangeEvent, useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { Button, Dialog, DialogBody, DialogFooter, Progress } from "@material-tailwind/react";
import { usePrepareContractWrite, useContractWrite, useAccount, useWaitForTransaction } from 'wagmi';
import { utils } from 'ethers';
import { CONTRACT_ABI, NUMBER_OF_PURCHASED_TOKENS_BY_CASH, REGEX_NUMBER_VALID } from "../../../utils/constants";
import useLoading from "../../../hooks/useLoading";
import { getVisibleAmount } from "../../../utils/functions";
import Input from "../../../components/Input";
import useAlertMessage from "../../../hooks/useAlertMessage";
import useAffiliate from "../../../hooks/useAffililate";
import { TSizeOfDialog } from "../../../utils/types";
import CustomDialogHeader from "../../../components/CustomDialogHeader";
import api from "../../../utils/api";

const { VITE_CONTRACT_ADDRESS, VITE_CHAIN_ID } = import.meta.env

// ----------------------------------------------------------------------------

interface IProps {
  dialogOpened: boolean;
  setDialogOpened: Function;
  sizeOfDialog: TSizeOfDialog;
  totalTokenAmount: number;
  mintableTokenAmount: number;
  tokenPriceInEth: number;
  ethPriceInUsd: number;
}

// ----------------------------------------------------------------------------

let numberOfLoad = 0;

// ----------------------------------------------------------------------------

export default function DialogTokenSale({ dialogOpened, setDialogOpened, sizeOfDialog, totalTokenAmount, mintableTokenAmount, tokenPriceInEth = 0, ethPriceInUsd = 0 }: IProps) {
  const { address } = useAccount()
  const { openLoading, closeLoading } = useLoading()
  const { openAlert } = useAlertMessage()
  const { affiliateToken } = useAffiliate()

  const [tokenAmount, setTokenAmount] = useState<string>('0')
  const [ethAmount, setEthAmount] = useState<string>('0')
  const [purchaseDisabled, setPurchaseDisabled] = useState<boolean>(false)

  /**
   * Handle opening of this dialog
   */
  const handleDialog = () => {
    setDialogOpened(!dialogOpened)
  }

  /**
   * Input ECO amount
   * @param e 
   */
  const handleTokenAmount = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    if (value.match(REGEX_NUMBER_VALID)) {
      setTokenAmount(value);
      setEthAmount((Number(value) * tokenPriceInEth).toFixed(5));
    }
  }

  /**
   * Input Ethereum amount
   * @param e 
   */
  const handleEthAmount = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    if (value.match(REGEX_NUMBER_VALID)) {
      setEthAmount(value);
      setTokenAmount((Number(value) / tokenPriceInEth).toFixed(5));
    }
  }

  /* --------------------- Purchase ECO ----------------------- */

  const { config: contractWriteConfig } = usePrepareContractWrite({
    address: VITE_CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    chainId: Number(VITE_CHAIN_ID),
    functionName: 'privateSale',  //  Replace
    args: [Number(tokenAmount || '0')],
    overrides: {
      from: address,
      value: utils.parseEther(ethAmount || '0')
    },
    onSuccess: () => {
      setPurchaseDisabled(false)
    },
    onError: () => {
      setPurchaseDisabled(true)
    },
  })

  const {
    data: contractWriteData,
    write: purchase,
  } = useContractWrite(contractWriteConfig)

  const { isError: transactionError, isSuccess: transactionSuccess, isLoading: transactionLoading } = useWaitForTransaction({
    hash: contractWriteData?.hash,
  })

  const handlePurchase = () => {
    numberOfLoad = 0
    purchase?.()
  }
  /* ----------------------------------------------------------- */

  useEffect(() => {
    if (transactionLoading) {
      openLoading()
    }
  }, [transactionLoading])

  useEffect(() => {
    if (transactionSuccess && numberOfLoad === 0) {
      if (affiliateToken) {
        api.post('/affiliate/pay-to-affiliator', { tokenAmount: `${Number(tokenAmount) / 100 * 4}`, affiliateToken, purchaserAddress: address })
          .then((result: any) => {
            openAlert({
              title: 'Success',
              color: 'green',
              message: 'Purchasing has been processeed successfully.',
              icon: <Icon icon="ic:round-check-circle" />
            })
            numberOfLoad = 1
            closeLoading()
          })
          .catch(error => {
            openAlert({
              title: 'Failed',
              color: 'red',
              message: 'Purchasing has occured error.',
              icon: <Icon icon="material-symbols:error-rounded" />
            })
            numberOfLoad = 1
            closeLoading()
          })
      } else {
        openAlert({
          title: 'Success',
          color: 'green',
          message: 'Purchasing has been processeed successfully.',
          icon: <Icon icon="ic:round-check-circle" />
        })
        closeLoading()
      }
    }
  }, [transactionSuccess])

  useEffect(() => {
    if (transactionError) {
      closeLoading()
      openAlert({
        title: 'Failed',
        color: 'red',
        message: 'Purchasing has occured error.',
        icon: <Icon icon="material-symbols:error-rounded" />
      })
    }
  }, [transactionError])

  return (
    <Dialog size={sizeOfDialog} open={dialogOpened} handler={handleDialog}>
      <CustomDialogHeader title="Purchase ECO" handleDialog={handleDialog} />
      <DialogBody className="px-6" divider>
        <div className="flex flex-col gap-4">
          {/* title - Replace */}
          <div className="flex flex-col gap-2">
            <h3 className="text-lg md:text-xl font-bold text-center">Pre-Sale</h3>
            <p className="text-sm text-center font-bold">1 ECO = {tokenPriceInEth} ETH</p>
          </div>

          {/* Progress bar */}
          <div className="flex flex-col gap-2">
            <Progress
              value={(totalTokenAmount - mintableTokenAmount + NUMBER_OF_PURCHASED_TOKENS_BY_CASH) / totalTokenAmount * 100}
              className="h-3 rounded-lg bg-gray-300"
              barProps={{
                className: 'bg-primary h-3 rounded-lg'
              }}
            />
            <div className="flex justify-between items-center">
              <p className="text-sm">
                Sold:<br />
                <span className="text-primary font-bold">{getVisibleAmount(totalTokenAmount - mintableTokenAmount + NUMBER_OF_PURCHASED_TOKENS_BY_CASH)}</span> ECO<br />
                ($<span className="text-primary font-bold">{getVisibleAmount((totalTokenAmount - mintableTokenAmount + NUMBER_OF_PURCHASED_TOKENS_BY_CASH) * ethPriceInUsd * tokenPriceInEth)}</span> USD)
              </p>
              <p className="text-sm">
                Total:<br />
                <span className="font-bold">{getVisibleAmount(totalTokenAmount)}</span> ECO<br />
                ($<span className="font-bold">{getVisibleAmount(totalTokenAmount * tokenPriceInEth * ethPriceInUsd)}</span> USD)
              </p>
            </div>
          </div>

          <p className="text-sm text-center">
            Next price: <span className="font-bold">1 ECO = 0.00004 ETH</span>
          </p>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="eco" className="text-gray-900 font-bold">ECO:</label>
              <Input
                id="eco"
                className="border border-gray-500 text-black"
                endAdornment={
                  <div className="flex items-center gap-1">
                    <img src="/assets/images/token_mark.png" alt="ECO" className="w-6" />
                    <span className="font-bold">ECO</span>
                  </div>
                }
                placeholder="0"
                value={tokenAmount}
                onChange={handleTokenAmount}
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="eth" className="text-gray-900 font-bold">Ethereum:</label>
              <Input
                id="eth"
                className="border border-gray-500 text-black"
                endAdornment={
                  <div className="flex items-center gap-1">
                    <img src="https://cryptologos.cc/logos/ethereum-eth-logo.png?v=024" alt="ETH" className="w-6" />
                    <span className="font-bold">ETH</span>
                  </div>
                }
                placeholder="0"
                value={ethAmount}
                onChange={handleEthAmount}
              />
            </div>
          </div>
        </div>
      </DialogBody>
      <DialogFooter>
        <Button
          className="bg-primary hover:bg-primary shadow-none hover:shadow-none rounded"
          disabled={purchaseDisabled}
          onClick={handlePurchase}
        >Purchase</Button>
      </DialogFooter>
    </Dialog>
  )
}