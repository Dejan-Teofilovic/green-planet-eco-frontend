import React from "react";
import { Button, Card, CardBody, CardFooter, CardHeader } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { ILearnData } from "../../utils/interfaces";
import { showFirstLetters } from "../../utils/functions";

// -------------------------------------------------------------------------------------

interface IProps {
  data: ILearnData;
}

// -------------------------------------------------------------------------------------

export default function LearnItem({ data }: IProps) {
  return (
    <Card>
      <CardHeader floated={false}>
        <img src={data.imgSrc} alt={data.title} />
      </CardHeader>
      <CardBody>
        <h2 className="text-xl font-bold">{data.title}</h2>
        <p className="text-gray-600 mt-4">{showFirstLetters(data.description, 60)}</p>
      </CardBody>
      <CardFooter>
        <Link to={`${data.id}`}>
          <Button variant="text" className="text-primary font-bold flex items-center gap-1 px-0">
            Learn More
            <Icon icon="material-symbols:arrow-right-alt-rounded" className="text-lg" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}