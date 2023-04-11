import React, { lazy } from "react";
import Container from "../../../components/Container";
import PageTitle from "../../../components/PageTitle";
import { ICampaignCardData } from "../../../utils/interfaces";

// --------------------------------------------------------------------------

const CardInGrid = lazy(() => import('./CardInGrid'))

// --------------------------------------------------------------------------

const CAMPAIGNS: Array<ICampaignCardData> = [
  {
    id: 1,
    title: 'Animal Feed and Food Bank',
    imgSrc: '/assets/images/chicken.jpg',
    description: 'There are many variations of passages of Lorem Ipsum available.',
    raisedAmount: 500000,
    goalAmount: 780000
  },
  {
    id: 2,
    title: 'Animal Feed and Food Bank',
    imgSrc: '/assets/images/chicken.jpg',
    description: 'There are many variations of passages of Lorem Ipsum available.',
    raisedAmount: 500000,
    goalAmount: 780000
  },
  {
    id: 3,
    title: 'Animal Feed and Food Bank',
    imgSrc: '/assets/images/chicken.jpg',
    description: 'There are many variations of passages of Lorem Ipsum available.',
    raisedAmount: 500000,
    goalAmount: 780000
  },
  {
    id: 4,
    title: 'Animal Feed and Food Bank',
    imgSrc: '/assets/images/chicken.jpg',
    description: 'There are many variations of passages of Lorem Ipsum available.',
    raisedAmount: 500000,
    goalAmount: 780000
  },
  {
    id: 5,
    title: 'Animal Feed and Food Bank',
    imgSrc: '/assets/images/chicken.jpg',
    description: 'There are many variations of passages of Lorem Ipsum available.',
    raisedAmount: 500000,
    goalAmount: 780000
  },
  {
    id: 6,
    title: 'Animal Feed and Food Bank',
    imgSrc: '/assets/images/chicken.jpg',
    description: 'There are many variations of passages of Lorem Ipsum available.',
    raisedAmount: 500000,
    goalAmount: 780000
  }
]

// --------------------------------------------------------------------------

export default function CampaignPage() {
  return (
    <div>
      <PageTitle title="Campaigns" />
      <Container className="my-16 md:my-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CAMPAIGNS.map(dataItem => (
            <CardInGrid data={dataItem} />
          ))}
        </div>
      </Container>
    </div>
  )
}