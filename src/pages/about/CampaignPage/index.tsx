import React, { lazy } from "react";
import Container from "../../../components/Container";
import { ICampaignCardData } from "../../../utils/interfaces";

// --------------------------------------------------------------------------

const CardInGrid = lazy(() => import('./CardInGrid'))
const PageTitle = lazy(() => import('../../../components/PageTitle'))

// --------------------------------------------------------------------------

const CAMPAIGNS: Array<ICampaignCardData> = [
  {
    id: 1,
    title: 'Reforestation',
    imgSrc: '/assets/images/campaign_reforestation.jpg',
    description: 'Your donation aids in reforestation.',
    raisedAmount: 0,
    goalAmount: 780000
  },
  {
    id: 2,
    title: 'Saving Water',
    imgSrc: '/assets/images/campaign_water.jpg',
    description: 'Your donation aids in Saving Water.',
    raisedAmount: 0,
    goalAmount: 780000
  },
  {
    id: 3,
    title: 'Recycling',
    imgSrc: '/assets/images/campaign_recycling.jpg',
    description: 'Your donation aids in Recycling.',
    raisedAmount: 0,
    goalAmount: 780000
  },
  {
    id: 4,
    title: 'Saving Oceans',
    imgSrc: '/assets/images/campaign_ocean.jpg',
    description: 'Your donation aids in Saving the Oceans.',
    raisedAmount: 0,
    goalAmount: 780000
  },
  {
    id: 5,
    title: 'Saving Animals',
    imgSrc: '/assets/images/campaign_animals.jpg',
    description: 'Your donation aids in Saving Animals.',
    raisedAmount: 0,
    goalAmount: 780000
  },
  {
    id: 6,
    title: 'Helping Communities',
    imgSrc: '/assets/images/campaign_communities.jpg',
    description: 'Your donation aids in Helping Communities.',
    raisedAmount: 0,
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
            <CardInGrid key={dataItem.id} data={dataItem} />
          ))}
        </div>
      </Container>
    </div>
  )
}