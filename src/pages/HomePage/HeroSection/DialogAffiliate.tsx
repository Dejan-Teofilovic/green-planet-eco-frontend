import React from "react";
import { Button, Dialog, DialogBody, DialogFooter } from "@material-tailwind/react";
import { Icon } from "@iconify/react";
import * as yup from 'yup';
import { useFormik } from "formik";
import { useAccount } from "wagmi";
import { TSizeOfDialog } from "../../../utils/types";
import CustomDialogHeader from "../../../components/CustomDialogHeader";
import Input from "../../../components/Input";
import { MSG_REQUIRED_FIELD } from "../../../utils/constants";
import useLoading from "../../../hooks/useLoading";
import useAlertMessage from "../../../hooks/useAlertMessage";
import api from "../../../utils/api";

// ----------------------------------------------------------------------------

interface IProps {
  dialogOpened: boolean;
  setDialogOpened: Function;
  sizeOfDialog: TSizeOfDialog;
}

interface IAffiliate {
  senderEmail: string;
  receiverEmail: string;
}

// ----------------------------------------------------------------------------

const validationSchema = yup.object().shape({
  senderEmail: yup.string().email('Invalid email type.').required(MSG_REQUIRED_FIELD),
  receiverEmail: yup.string().email('Invalid email type.').notOneOf([yup.ref('senderEmail'), undefined], "Emails mustn't be same.").required(MSG_REQUIRED_FIELD)
})

// ---------------------------------------------------------------------

export default function DialogAffiliate({ dialogOpened, setDialogOpened, sizeOfDialog }: IProps) {
  const { address } = useAccount()
  const { openLoading, closeLoading } = useLoading()
  const { openAlert } = useAlertMessage()

  const initialValues: IAffiliate = {
    senderEmail: '',
    receiverEmail: ''
  }

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      openLoading()
      api.post('/affiliate/send-affiliate-link', { ...values, senderWallet: address })
        .then((result: any) => {
          if (result.status === 200) {
            openAlert({
              title: 'Success',
              color: 'green',
              message: 'Your invitation has been sent successfully.',
              icon: <Icon icon="ic:round-check-circle" />
            })
          } else if (500) {
            openAlert({
              title: 'Failed',
              color: 'red',
              message: 'Sending invitation has been failed.',
              icon: <Icon icon="material-symbols:error-rounded" />
            })
          }
          closeLoading()
        })
        .catch(error => {
          openAlert({
            title: 'Failed',
            color: 'red',
            message: 'Sending invitation has been failed.',
            icon: <Icon icon="material-symbols:error-rounded" />
          })
          closeLoading()
        })
    }
  })

  const handleDialog = () => {
    setDialogOpened(!dialogOpened)
  }
  return (
    <Dialog size={sizeOfDialog} open={dialogOpened} handler={handleDialog}>
      <CustomDialogHeader title="Invite Friend" handleDialog={handleDialog} />
      <DialogBody className="px-6" divider>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="senderEmail" className="text-gray-900 font-bold">Your Email:</label>
            <Input
              type="email"
              id="senderEmail"
              name="senderEmail"
              className="border border-gray-500 text-black"
              startAdornment={<Icon icon="streamline:mail-send-envelope-envelope-email-message-unopened-sealed-close" className="text-gray-700" />}
              placeholder="me@email.com"
              onChange={formik.handleChange}
              value={formik.values.senderEmail}
              error={formik.touched.senderEmail && Boolean(formik.errors.senderEmail)}
            />
            {formik.touched.senderEmail && Boolean(formik.errors.senderEmail) && (
              <span className="text-red-500 text-sm">
                {formik.touched.senderEmail && formik.errors.senderEmail}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="receiverEmail" className="text-gray-900 font-bold">Friend's Email:</label>
            <Input
              type="email"
              id="receiverEmail"
              name="receiverEmail"
              className="border border-gray-500 text-black"
              startAdornment={<Icon icon="streamline:mail-send-envelope-envelope-email-message-unopened-sealed-close" className="text-gray-700" />}
              placeholder="friend@email.com"
              onChange={formik.handleChange}
              value={formik.values.receiverEmail}
              error={formik.touched.receiverEmail && Boolean(formik.errors.receiverEmail)}
            />
            {formik.touched.receiverEmail && Boolean(formik.errors.receiverEmail) && (
              <span className="text-red-500 text-sm">
                {formik.touched.receiverEmail && formik.errors.receiverEmail}
              </span>
            )}
          </div>

          <div className="flex gap-1 items-start md:items-center">
            <Icon icon="solar:info-circle-linear" className="mt-1 md:mt-0" />
            <p className="text-gray-700 text-sm font-bold">
              You will earn 4% of ECO token that your friend purchase.
            </p>
          </div>
        </div>
      </DialogBody>
      <DialogFooter>
        <Button
          className="bg-primary hover:bg-primary shadow-none hover:shadow-none rounded"
          onClick={() => formik.handleSubmit()}
        >Send Invite</Button>
      </DialogFooter>
    </Dialog>
  )
}