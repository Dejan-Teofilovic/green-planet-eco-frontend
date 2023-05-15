import React from "react";
import { Button, Dialog, DialogBody, DialogFooter } from "@material-tailwind/react";
import { Icon } from "@iconify/react";
import copy from 'copy-text-to-clipboard'
import { TSizeOfDialog } from "../../../utils/types";
import CustomDialogHeader from "../../../components/CustomDialogHeader";

// ----------------------------------------------------------------------------

interface IProps {
  dialogOpened: boolean;
  setDialogOpened: Function;
  sizeOfDialog: TSizeOfDialog;
  affiliateLink: string;
}

// ----------------------------------------------------------------------------

export default function DialogAffiliate({ dialogOpened, setDialogOpened, sizeOfDialog, affiliateLink }: IProps) {
  const handleCopy = () => {
    copy(affiliateLink)
  }

  const handleDialog = () => {
    setDialogOpened(!dialogOpened)
  }

  return (
    <Dialog size={sizeOfDialog} open={dialogOpened} handler={handleDialog}>
      <CustomDialogHeader title="Affiliate Link" handleDialog={handleDialog} />
      <DialogBody className="px-6" divider>
        <div className="flex flex-col gap-4">
          <p className="text-gray-700 text-sm font-bold">
            Please copy the following link and share it to others. You will get 4% of ECO token which they purchase as reward.
          </p>
          <p className="text-gray-700 break-words">
            {affiliateLink}
          </p>
        </div>
      </DialogBody>
      <DialogFooter>
        <Button
          className="bg-primary hover:bg-primary shadow-none hover:shadow-none rounded flex items-center gap-1"
          onClick={handleCopy}
        >
          <Icon icon="material-symbols:content-copy" className="text-base" />
          Copy
        </Button>
      </DialogFooter>
    </Dialog>
  )
}