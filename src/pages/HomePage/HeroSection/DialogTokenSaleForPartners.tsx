import React, { ChangeEvent, useEffect, useMemo, useState } from "react";
import { Icon } from "@iconify/react";
import { Button, Dialog, DialogBody, DialogFooter, Progress } from "@material-tailwind/react";
import { useContractReads, usePrepareContractWrite, useContractWrite, useAccount, useWaitForTransaction } from 'wagmi';
import { utils } from 'ethers';
import { MerkleTree } from 'merkletreejs'
import keccak256 from "keccak256";
import { CONTRACT_ABI, REGEX_NUMBER_VALID, WHITELIST_OF_PARTNERS } from "../../../utils/constants";
import useLoading from "../../../hooks/useLoading";
import { getVisibleAmount } from "../../../utils/functions";
import Input from "../../../components/Input";
import useAlertMessage from "../../../hooks/useAlertMessage";
import { TSizeOfDialog } from "../../../utils/types";
import CustomDialogHeader from "../../../components/CustomDialogHeader";

const { VITE_CONTRACT_ADDRESS, VITE_CHAIN_ID } = import.meta.env

// ----------------------------------------------------------------------------

interface IProps {
  dialogOpened: boolean;
  setDialogOpened: Function;
  sizeOfDialog: TSizeOfDialog;
}

// ----------------------------------------------------------------------------

const contract: {} = {
  address: VITE_CONTRACT_ADDRESS,
  abi: CONTRACT_ABI,
  chainId: Number(VITE_CHAIN_ID)
}

// ----------------------------------------------------------------------------

export default function DialogTokenSaleForPartners({ dialogOpened, setDialogOpened, sizeOfDialog }: IProps) {
  const { address } = useAccount()
  const { openLoading, closeLoading } = useLoading()
  const { openAlert } = useAlertMessage()

  const [totalTokenAmount, setTotalTokenAmount] = useState<number>(0)
  const [mintableTokenAmount, setMintableTokenAmount] = useState<number>(0)
  const [tokenPrice, setTokenPrice] = useState<number>(0)
  const [tokenAmount, setTokenAmount] = useState<string>('0')
  const [ethAmount, setEthAmount] = useState<string>('0')
  const [purchaseDisabled, setPurchaseDisabled] = useState<boolean>(false)

  const merkleProof = useMemo<Array<string>>(() => {
    if (address) {
      const leafNodes = WHITELIST_OF_PARTNERS.map(addr => keccak256(addr));
      const merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true });

      const hexProof = merkleTree.getHexProof(keccak256(address));
      return hexProof
    } else {
      return []
    }
  }, [address])

  //  Get essential values from contract
  const { isLoading: contractReadsLoading } = useContractReads({
    contracts: [
      {
        ...contract,
        functionName: 'INIT_TOTAL_SUPPLY'
      },
      {
        ...contract,
        functionName: 'SHARE_OF_PARTNERS'
      },
      {
        ...contract,
        functionName: 'mintableTokenAmountForPartners'
      },
      {
        ...contract,
        functionName: 'tokenPriceForPartners'
      },
    ],

    watch: true,

    onSuccess: (data: Array<any>) => {
      const totalSupply = parseInt(data[0]._hex) / 1e18
      setTotalTokenAmount(totalSupply * data[1] / 1000)
      setMintableTokenAmount(parseInt(data[2]._hex) / 1e18)
      setTokenPrice(parseInt(data[3]._hex) / 1e18)
    }
  })

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
      setEthAmount((Number(value) * tokenPrice).toFixed(5));
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
      setTokenAmount((Number(value) / tokenPrice).toFixed(5));
    }
  }

  /* --------------------- Purchase ECO ----------------------- */
  const { config: contractWriteConfig } = usePrepareContractWrite({
    address: VITE_CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    chainId: Number(VITE_CHAIN_ID),
    functionName: 'mintForPartners',
    args: [merkleProof, Number(tokenAmount || '0')],
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
    purchase?.()
  }
  /* ----------------------------------------------------------- */

  useEffect(() => {
    if (contractReadsLoading || transactionLoading) {
      openLoading()
    }
  }, [contractReadsLoading, transactionLoading])

  useEffect(() => {
    if (transactionSuccess) {
      closeLoading()
      openAlert({
        title: 'Success',
        color: 'green',
        message: 'Purchasing has been processeed successfully.',
        icon: <Icon icon="ic:round-check-circle" />
      })
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
        <div className="flex flex-col gap-8">
          {/* title - Replace */}
          <h3 className="text-lg md:text-xl font-bold text-center">Private Sale for Our Partners</h3>

          {/* Progress bar */}
          <div className="flex flex-col gap-2">
            <Progress
              value={(totalTokenAmount - mintableTokenAmount) / totalTokenAmount * 100}
              className="h-3 rounded-lg bg-gray-300"
              barProps={{
                className: 'bg-primary h-3 rounded-lg'
              }}
            />
            <div className="flex justify-between items-center">
              <p className="text-sm">Sold: <span className="text-primary font-bold">{getVisibleAmount(totalTokenAmount - mintableTokenAmount)}</span> ECO</p>
              <p className="text-sm">Total: <span className="font-bold">{getVisibleAmount(totalTokenAmount)}</span> ECO</p>
            </div>
          </div>

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