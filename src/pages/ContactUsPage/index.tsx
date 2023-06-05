import React, { lazy } from 'react'
import * as yup from 'yup';
import { useFormik } from "formik";
import { Icon } from '@iconify/react'
import { Button } from '@material-tailwind/react';
import Container from '../../components/Container'
import { MSG_REQUIRED_FIELD } from '../../utils/constants'
import Input from '../../components/Input';
import useAlertMessage from '../../hooks/useAlertMessage';
import useLoading from '../../hooks/useLoading';
import api from '../../utils/api';

// ----------------------------------------------------------------------

const PageTitle = lazy(() => import('../../components/PageTitle'))

// -----------------------------------------------------------------------

interface IRequestData {
  name: string;
  email: string;
  website: string;
  message: string;
}

// -----------------------------------------------------------------------

const validationSchema = yup.object().shape({
  name: yup.string().required(MSG_REQUIRED_FIELD),
  email: yup.string().email('Invalid email type.').required(MSG_REQUIRED_FIELD),
  website: yup.string().url('Invalid URL type.').required(MSG_REQUIRED_FIELD)
})

// ----------------------------------------------------------------------

export default function ContactUsPage() {
  const { openAlert } = useAlertMessage()
  const { openLoading, closeLoading } = useLoading()

  const initialValues: IRequestData = {
    name: '',
    email: '',
    website: '',
    message: ''
  }

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      openLoading()
      api.post('/contact/contact-to-admin', values)
        .then((result: any) => {
          if (result.status === 200) {
            openAlert({
              title: 'Success',
              color: 'green',
              message: 'Your email has been sent successfully.',
              icon: <Icon icon="ic:round-check-circle" />
            })
          } else if (500) {
            openAlert({
              title: 'Failed',
              color: 'red',
              message: 'Sending email has been failed.',
              icon: <Icon icon="material-symbols:error-rounded" />
            })
          }
          closeLoading()
        })
        .catch(error => {
          openAlert({
            title: 'Failed',
            color: 'red',
            message: 'Sending email has been failed.',
            icon: <Icon icon="material-symbols:error-rounded" />
          })
          closeLoading()
        })
    }
  })

  return (
    <div>
      <noscript>
        <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NNTKG8C"
          height="0" width="0" style={{ display: 'none', visibility: 'hidden' }} />
      </noscript>
      <PageTitle title="Contact Us" />
      <Container className="my-16 md:my-32">
        <div className="grid grid-cols-3 gap-24">
          <div className="col-span-3 md:col-span-1 flex flex-col gap-2">
            {/* <div className="flex gap-6">
              <Icon icon="ic:outline-email" className="text-primary text-5xl mt-[-0.3rem]" />
              <div className="flex flex-col gap-4">
                <span className="text-2xl font-bold">Email</span>

                <a href="mailto:info@greenplaneteco.com">info@greenplaneteco.com</a>
              </div>
            </div> */}
            <div className="flex items-center gap-4">
              <Icon icon="ic:round-email" className="text-primary text-2xl" />
              <a href="mailto:info@greenplaneteco.com">info@greenplaneteco.com</a>
            </div>
            <div className="flex items-center gap-4">
              <Icon icon="solar:phone-bold" className="text-primary text-2xl" />
              <a href="tel:64223694776">+64223694776</a>
            </div>
            <div className="flex items-center gap-4">
              <Icon icon="mdi:location" className="text-primary text-2xl" />
              <span>Christchurch Central, New Zealand</span>
            </div>

          </div>
          <div className="col-span-3 md:col-span-2 bg-primary rounded-sm p-8 md:p-16 flex flex-col gap-8">
            <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-extrabold">Want to talk? Let's do it!</h2>

            <div className="grid grid-cols-2 gap-8">
              {/* Your Name */}
              <div className="col-span-2 md:col-span-1">
                <Input
                  id="name"
                  name="name"
                  className="py-1 md:py-3 rounded-none"
                  placeholder="Your Name *"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                />
                {formik.touched.name && Boolean(formik.errors.name) && (
                  <span className="text-red-800 text-sm font-bold">
                    {formik.touched.name && formik.errors.name}
                  </span>
                )}
              </div>

              {/* Your Email */}
              <div className="col-span-2 md:col-span-1">
                <Input
                  id="email"
                  name="email"
                  type="email"
                  className="py-1 md:py-3 rounded-none"
                  placeholder="Your Email *"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                />
                {formik.touched.email && Boolean(formik.errors.email) && (
                  <span className="text-red-800 text-sm font-bold">
                    {formik.touched.email && formik.errors.email}
                  </span>
                )}
              </div>

              {/* Website URL */}
              <div className="col-span-2">
                <Input
                  id="website"
                  name="website"
                  className="py-1 md:py-3 rounded-none"
                  placeholder="Website URL *"
                  onChange={formik.handleChange}
                  value={formik.values.website}
                />
                {formik.touched.website && Boolean(formik.errors.website) && (
                  <span className="text-red-800 text-sm font-bold">
                    {formik.touched.website && formik.errors.website}
                  </span>
                )}
              </div>

              {/* Message */}
              <div className="col-span-2">
                <textarea
                  id="message"
                  name="message"
                  className="px-3 py-2 w-full focus:outline-none"
                  placeholder="Message"
                  rows={4}
                  onChange={formik.handleChange}
                  value={formik.values.message}
                />
              </div>
            </div>

            <div>
              <Button
                className="bg-black shadow-none hover:shadow-none capitalize px-12 text-base rounded-full mt-4"
                onClick={() => formik.handleSubmit()}
              >Submit Request</Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}