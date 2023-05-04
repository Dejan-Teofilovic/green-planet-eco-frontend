import React, { lazy } from "react";
import Container from "../../components/Container";
import { INewsData } from "../../utils/interfaces";

// -----------------------------------------------------------------------

const PageTitle = lazy(() => import('../../components/PageTitle'))
const NewsCard = lazy(() => import('./NewsCard'))

// -----------------------------------------------------------------------

const NEWS: Array<INewsData> = [
  {
    id: 1,
    title: 'Reforestation',
    description: '',
    imgSrc: '/assets/images/learn_reforestation.jpg',
    postedAt: new Date()
  },
  {
    id: 2,
    title: 'Saving Water',
    description: '',
    imgSrc: '/assets/images/learn_water.jpg',
    postedAt: new Date()
  },
  {
    id: 3,
    title: 'Wind Energy',
    description: '',
    imgSrc: '/assets/images/learn_wind.jpg',
    postedAt: new Date()
  },
  {
    id: 4,
    title: 'Saving Forests',
    description: '',
    imgSrc: '/assets/images/learn_forest.jpg',
    postedAt: new Date()
  },
  {
    id: 5,
    title: 'Saving Animals',
    description: '',
    imgSrc: '/assets/images/news_animals.jpg',
    postedAt: new Date()
  },
  {
    id: 6,
    title: 'Recycling',
    description: '',
    imgSrc: '/assets/images/learn_recycling.jpg',
    postedAt: new Date()
  }
]

// -----------------------------------------------------------------------

export default function NewsPage() {
  return (
    <div>
      <PageTitle title="News" />
      <Container className="my-16 md:my-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {NEWS.map(dataItem => (
            <div key={dataItem.id}>
              <NewsCard data={dataItem} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}