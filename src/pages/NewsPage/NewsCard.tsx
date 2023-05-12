import React from "react";
import { Button, Card, CardBody, CardFooter, CardHeader } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { getVisibleDateTime } from "../../utils/functions";
import { INewsData } from "../../utils/interfaces";

// ------------------------------------------------------------------------

interface IProps {
  data: INewsData
}

// ------------------------------------------------------------------------

export default function NewsCard({ data }: IProps) {
  return (
    <Card>
      <CardHeader floated={false}>
        <img src={data.imgSrc} alt={data.title} />
      </CardHeader>
      <CardBody className="flex flex-col gap-4 pb-0">
        <div className="flex items-center gap-1">
          <Icon icon="ic:outline-watch-later" className="text-base" />
          <span className="text-sm">
            {getVisibleDateTime(data.postedAt)}
          </span>
        </div>
        <h2 className="text-xl font-bold">{data.title}</h2>
        <p className="text-gray-600">Upcoming soon...</p>
        {/* <p className="text-gray-600 mt-4">{showFirstLetters(data.description, 60)}</p> */}
      </CardBody>
      <CardFooter>
        <Link to={`${data.id}`}>
          <Button variant="text" className="text-primary font-bold flex items-center gap-1 px-0">
            Read More
            <Icon icon="material-symbols:arrow-right-alt-rounded" className="text-lg" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}