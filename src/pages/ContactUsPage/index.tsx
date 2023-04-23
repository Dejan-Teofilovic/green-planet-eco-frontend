import React, { lazy } from 'react'
import * as yup from 'yup';
import { useFormik } from "formik";
import { Icon } from '@iconify/react'
import Container from '../../components/Container'
import { MSG_REQUIRED_FIELD } from '../../utils/constants'
import Input from '../../components/Input';
import { Button } from '@material-tailwind/react';

// ----------------------------------------------------------------------

const PageTitle = lazy(() => import('../../components/PageTitle'))

// -----------------------------------------------------------------------

interface IRequestData {
  name: string;
  email: string;
  url: string;
  message: string;
}

// -----------------------------------------------------------------------

const validationSchema = yup.object().shape({
  name: yup.string().required(MSG_REQUIRED_FIELD),
  email: yup.string().email('Invalid email type.').required(MSG_REQUIRED_FIELD)
})

// ----------------------------------------------------------------------

export default function ContactUsPage() {
  const initialValues: IRequestData = {
    name: '',
    email: '',
    url: '',
    message: ''
  }

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      // console.log(values)
    }
  })

  return (
    <div>
      <PageTitle title="Contact Us" />
      <Container className="my-16 md:my-32">
        <div className="grid grid-cols-3 gap-24">
          <div className="col-span-3 md:col-span-1">
            <div className="flex gap-6">
              <Icon icon="ic:outline-email" className="text-primary text-5xl mt-[-0.3rem]" />
              <div className="flex flex-col gap-4">
                <span className="text-2xl font-bold">Email</span>

                <a href="mailto:info@greenplaneteco.com">info@greenplaneteco.com</a>
              </div>
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
                  <span className="text-red-500 text-sm">
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
                  <span className="text-red-500 text-sm">
                    {formik.touched.email && formik.errors.email}
                  </span>
                )}
              </div>

              {/* Website URL */}
              <div className="col-span-2">
                <Input
                  id="url"
                  name="url"
                  className="py-1 md:py-3 rounded-none"
                  placeholder="Website URL *"
                  onChange={formik.handleChange}
                  value={formik.values.url}
                />
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