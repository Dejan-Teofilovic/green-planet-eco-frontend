import React, { lazy, useState } from "react";
import * as yup from 'yup';
import { useFormik } from "formik";
import { Button } from "@material-tailwind/react";
import Container from "../../../components/Container";
import { IFaqData } from "../../../utils/interfaces";
import Input from "../../../components/Input";
import { MSG_REQUIRED_FIELD, SERVICES } from "../../../utils/constants";

// ---------------------------------------------------------------------

const PageTitle = lazy(() => import('../../../components/PageTitle'))
const AccordionItem = lazy(() => import('./AccordionItem'))

// ---------------------------------------------------------------------

interface IMessageData {
  name: string;
  email: string;
  message: string;
}

// ---------------------------------------------------------------------

const FAQS: Array<IFaqData> = [
  {
    id: 1,
    question: 'How to reduce energy costs?',
    answer: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.'
  },
  {
    id: 2,
    question: 'How to rescue me?',
    answer: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.'
  },
  {
    id: 3,
    question: 'How to fix a tree planted too deep?',
    answer: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.'
  }
]

// ---------------------------------------------------------------------

const validationSchema = yup.object().shape({
  name: yup.string().required(MSG_REQUIRED_FIELD),
  email: yup.string().email('Invalid email type.').required(MSG_REQUIRED_FIELD)
})

// ---------------------------------------------------------------------

export default function FaqPage() {
  const [openedAccordions, setOpenedAccordions] = useState<Array<number>>([])

  const initialValues: IMessageData = {
    name: '',
    email: '',
    message: ''
  }

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      console.log(values)
    }
  })

  const handleAccordionOpening = (accordionId: number) => {
    const _openedAccordions = [...openedAccordions]
    const indexOfAccordionId = _openedAccordions.indexOf(accordionId)


    if (indexOfAccordionId >= 0) {
      _openedAccordions.splice(indexOfAccordionId, 1)
      setOpenedAccordions(_openedAccordions)
    } else {
      setOpenedAccordions([..._openedAccordions, accordionId])
    }
  }

  return (
    <div>
      <PageTitle title="Faq" />
      <div className="bg-white py-16 md:py-32">
        <Container>
          <div className="grid grid-cols-7 gap-8 items-start">
            <div className="col-span-7 md:col-span-4 p-4 bg-gray-100 flex flex-col gap-6">
              {FAQS.map(faqItem => (
                <AccordionItem key={faqItem.id} data={faqItem} handleAccordionOpening={handleAccordionOpening} openedAccordions={openedAccordions} />
              ))}
            </div>
            <div className="col-span-7 md:col-span-3 bg-primary rounded-lg py-8 md:py-12 px-8">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold">Any Questions?</h2>
              <div className="flex flex-col gap-4 mt-6 md:mt-8">
                {/* Your Name */}
                <div>
                  <Input
                    id="name"
                    name="name"
                    type="name"
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
                <div>
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
                <div>
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

              <Button
                className="bg-black shadow-none hover:shadow-none capitalize px-12 text-base rounded-full mt-4"
                onClick={() => formik.handleSubmit()}
              >Send</Button>
            </div>
          </div>
        </Container>
      </div>
      <div className="bg-gray-100 py-16 md:py-32">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map(dataItem => (
              <div key={dataItem.id} className="rounded-2xl px-8 py-10 bg-white flex flex-col items-center">
                <img src={dataItem.imgSrc} alt={dataItem.title} />
                <h2 className="text-gray-800 text-center text-2xl font-bold mt-8">{dataItem.title}</h2>
                <p className="text-gray-500 text-center mt-4">{dataItem.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </div>
  )
}