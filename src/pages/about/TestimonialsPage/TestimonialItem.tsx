import React from "react";
import { Avatar } from "@material-tailwind/react";
import { Icon } from "@iconify/react";
import { ITestimonialData } from "../../../utils/interfaces";

// ----------------------------------------------------------------------------------

interface IProps {
  data: ITestimonialData
}

// ----------------------------------------------------------------------------------

export default function TestimonialItem({ data }: IProps) {
  return (
    <div className="flex flex-col items-center mb-8">
      <div>
        <Avatar src={data.avatarSrc} alt={data.name} variant="circular" size="xs" />
      </div>
      <div className="flex flex-col items-center mt-8 gap-3">
        <div className="max-w-3xl mx-auto">
          <p className="text-center text-gray-600 leading-7 md:leading-10">
            Mauris id enim id purus ornare tincidunt. Aenean vel consequat risus. Proin viverra nisi at nisl imperdiet auctor. Donec ornare, est sed tincidunt placerat, sem mi suscipit mi, at varius enim sem at sem. Fusce
          </p>
        </div>
        <Icon icon="material-symbols:format-quote-rounded" className="text-primary text-4xl" />
        <div>
          <p className="text-center font-bold uppercase">Angelina</p>
          <p className="text-center text-gray-600">Analytics</p>
        </div>
      </div>
    </div >
  )
}