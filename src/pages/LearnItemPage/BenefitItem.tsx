import React, { useMemo } from "react";
import { Accordion, AccordionBody, AccordionHeader } from "@material-tailwind/react";
import { Icon } from "@iconify/react";
import { IBenefitOfLearn } from "../../utils/interfaces";

// -------------------------------------------------------------------

interface IProps {
  data: IBenefitOfLearn;
  openedAccordions: Array<number>,
  handleAccordionOpening: Function;
}

// -------------------------------------------------------------------

export default function BenefitItem({ data, openedAccordions, handleAccordionOpening }: IProps) {

  const opened = useMemo<boolean>(() => {
    if (openedAccordions.indexOf(data.id) >= 0) {
      return true
    }
    return false
  }, [data.id, openedAccordions])

  return (
    <Accordion
      className="bg-white shadow-md"
      open={opened}
      icon={
        openedAccordions.indexOf(data.id) >= 0 ? (
          <Icon
            icon="ph:minus-circle-fill"
            className="text-primary text-2xl md:text-3xl"
          />
        ) : (

          <Icon
            icon="material-symbols:add-circle-rounded"
            className="text-primary text-2xl md:text-3xl"
          />
        )
      }
    >
      <AccordionHeader
        onClick={() => handleAccordionOpening(data.id)}
        className="px-6 font-bold border-none text-black text-left text-base md:text-lg"
      >
        {data.title}
      </AccordionHeader>
      <AccordionBody className="px-6 leading-8 text-gray-800 pt-0">
        {data.description}
      </AccordionBody>
    </Accordion>
  )
}