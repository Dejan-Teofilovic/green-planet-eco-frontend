import React, { lazy, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, CardBody } from "@material-tailwind/react";
import { LEARNS } from "../../utils/constants";
import Container from "../../components/Container";
import TinyDashedBar from "../../components/TinyDashedBar";

// -----------------------------------------------------------------------------------

const PageTitle = lazy(() => import('../../components/PageTitle'))
const NoPage = lazy(() => import('../NoPage'))
const SideLearnNav = lazy(() => import('./SideLearnNav'))
const BenefitItem = lazy(() => import('./BenefitItem'))

// -----------------------------------------------------------------------------------

export default function LearnItemPage() {
  const { id } = useParams()

  const [openedAccordions, setOpenedAccordions] = useState<Array<number>>([])

  const data = useMemo(() => {
    const learnId = Number(id)
    return LEARNS.find(dataItem => dataItem.id === learnId)
  }, [id])

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

  if (data) {
    return (
      <div>
        <PageTitle title={data.title} />
        <Container className="my-16 md:my-32">
          <div className="flex gap-16">
            <div className="hidden md:block md:w-1/4">
              <SideLearnNav />
            </div>

            <div className="flex-1">
              <Card className="w-full md:w-2/3 lg:w-1/2">
                <CardBody className="p-3">
                  <img src={data.imgSrc} alt="company" className="rounded-lg" />
                </CardBody>
              </Card>

              <div className="mt-6 flex flex-col gap-6">
                {data.description.split('<br />').map((descriptionItem, index) => (
                  <p className="text-gray-600 text-justify" key={index}>
                    {descriptionItem}
                  </p>
                ))}
              </div>

              <h2 className="mt-16 text-3xl font-black">Benefits</h2>
              <TinyDashedBar className="mt-4" />

              <div className="mt-8 flex flex-col gap-4">
                {data.benefits.map(benefit => (
                  <BenefitItem key={benefit.id} data={benefit} openedAccordions={openedAccordions} handleAccordionOpening={handleAccordionOpening} />
                ))}
              </div>
            </div>
          </div>
        </Container>
      </div>
    )
  } else {
    return <NoPage />
  }
}