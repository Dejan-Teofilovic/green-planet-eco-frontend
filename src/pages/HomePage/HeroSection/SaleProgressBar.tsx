import { Progress } from "@material-tailwind/react";
import { useContractReads } from 'wagmi';
import { CONTRACT_ABI, CONTRACT_ADDRESS } from "../../../utils/constants";
import { useEffect, useState } from "react";
import useLoading from "../../../hooks/useLoading";
import { getVisibleAmount } from "../../../utils/functions";

// ------------------------------------------------------------------------------

const contract: {} = {
  address: CONTRACT_ADDRESS,
  abi: CONTRACT_ABI
}

// ------------------------------------------------------------------------------


export default function SaleProgressBar() {
  const { openLoading, closeLoading } = useLoading()

  const [totalSupply, setTotalSupply] = useState<number>(0)
  const [mintableTokenAmount, setMintableTokenAmount] = useState<number>(0)

  const { isLoading } = useContractReads({
    contracts: [
      {
        ...contract,
        functionName: 'INIT_TOTAL_SUPPLY'
      },
      {
        ...contract,
        functionName: 'mintableTokenAmountForPrivate'
      }
    ],

    onSuccess: (data: Array<any>) => {
      setTotalSupply(parseInt(data[0]._hex) / 1e18)
      setMintableTokenAmount(parseInt(data[1]._hex) / 1e18)
    }
  })

  useEffect(() => {
    if (isLoading) {
      openLoading()
    } else {
      closeLoading()
    }
  }, [isLoading])

  return (
    <div className="flex flex-col gap-1">
      <Progress />
      <div className="flex items-center justify-between">
        <p className="text-sm">Sold: <span>{getVisibleAmount(totalSupply - mintableTokenAmount)}</span> ECO</p>
        <p className="text-sm">Total: <span>{getVisibleAmount(totalSupply)}</span> ECO</p>
      </div>
    </div>
  )
}