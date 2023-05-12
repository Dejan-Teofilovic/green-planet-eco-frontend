import React from "react";
import { Card, CardBody, CardFooter, CardHeader, IconButton } from "@material-tailwind/react";
import { Icon } from "@iconify/react";
import { IProfileData } from "../utils/interfaces";

// ----------------------------------------------------------------------------------

interface IProps {
  data: IProfileData
}

// ----------------------------------------------------------------------------------

export default function ProfileCard({ data }: IProps) {
  return (
    <Card>
      <CardHeader floated={false}>
        <img src={data.imgSrc} alt={data.name} />
      </CardHeader>

      <CardBody className="text-center">
        <h3 className="capitalize text-2xl font-bold">{data.name}</h3>
        <p className="text-lg text-primary font-bold">{data.position}</p>
        <p className="text-gray-600 mt-3">{data.bio}</p>
      </CardBody>

      <CardFooter className="flex justify-center items-center gap-2">
        {data.socialLinks.map(dataItem => (
          <IconButton variant="text" key={dataItem.id} className="text-primary text-2xl">
            <a target="_blank" href={dataItem.url}>
              <Icon icon={dataItem.icon} />
            </a>
          </IconButton>
        ))}
      </CardFooter>
    </Card>
  )
}