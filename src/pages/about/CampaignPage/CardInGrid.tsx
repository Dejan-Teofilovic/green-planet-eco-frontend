import React from "react";
import { Avatar, Button, Card, Progress } from "@material-tailwind/react";
import { ICampaignCardData } from "../../../utils/interfaces";
import { getVisibleAmount } from "../../../utils/functions";

// -----------------------------------------------------------------------------

interface IProps {
  data: ICampaignCardData
}

// -----------------------------------------------------------------------------

export default function CardInGrid({ data }: IProps) {
  return (
    <Card className="px-8 py-10">
      <div className="flex items-center gap-6">
        <Avatar src={data.imgSrc} alt={data.title} variant="circular" size="xl" />
        <h2 className="text-xl font-bold text-gray-800">{data.title}</h2>
      </div>

      <p className="text-gray-600 mt-4">{data.description}</p>
      <div className="flex-1" />
      <div>
        <div className="mt-14 flex flex-col gap-2">
          <Progress
            className="h-3 rounded-full"
            value={data.raisedAmount / data.goalAmount * 100}
            barProps={{
              className: 'bg-primary'
            }}
          />
          <p className="text-sm text-gray-600">
            <span className="text-gray-800 font-bold">${getVisibleAmount(data.raisedAmount)}</span>&nbsp;
            donated of &nbsp;
            <span className="text-gray-800 font-bold">${getVisibleAmount(data.goalAmount)}</span> goal
          </p>
        </div>

        <div className="mt-4">
          <Button className="rounded-full text-base bg-primary shadow-none capitalize">Donate</Button>
        </div>
      </div>
    </Card>
  )
}