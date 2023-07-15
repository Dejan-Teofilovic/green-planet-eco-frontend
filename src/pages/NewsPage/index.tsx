import React, { lazy } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from "swiper";
import { Card, CardBody } from "@material-tailwind/react";
import Container from "../../components/Container";
import { IFaqData, IImage, INewsData } from "../../utils/interfaces";

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

// const APP_IMAGES: Array<IImage> = [
//   {
//     id: 1,
//     imgSrc: '/assets/images/news_app_1.jpg'
//   },
//   {
//     id: 2,
//     imgSrc: '/assets/images/news_app_2.jpg'
//   },
//   {
//     id: 3,
//     imgSrc: '/assets/images/news_app_3.jpg'
//   },
//   {
//     id: 4,
//     imgSrc: '/assets/images/news_app_4.jpg'
//   },
//   {
//     id: 5,
//     imgSrc: '/assets/images/news_app_5.jpg'
//   },
//   {
//     id: 6,
//     imgSrc: '/assets/images/news_app_6.jpg'
//   },
// ]

// const QAS: Array<IFaqData> = [
//   {
//     id: 1,
//     question: 'How does the ECO App will operate?',
//     answer: 'The ECO App will provide the user with a variety of services, such as calculating their carbon footprint, scanning what they have recycled and entering what actions they have taken throughout the day, providing education through e-modules, and displaying interesting facts when the user scans or enters their daily information.'
//   },
//   {
//     id: 2,
//     question: '1. Calculate your carbon footprint',
//     answer: "The Artificial Intelligence Assistant will capture all of the user's data, and the App will use this information to calculate the user's lifestyle's impact on the environment."
//   },
//   {
//     id: 3,
//     question: '2. Track your climate impact',
//     answer: 'The application will also provide a system for tracking your climate impact in real time. You will also be able to share this information on all social media platforms in order to encourage others to reduce their carbon footprint.<br />You can also earn eco token by inviting friends to follow you and every time your friends buy carbon credit you will earn 4% of the amount they buy and the photos of the app right under this text.'
//   }
// ]

// -----------------------------------------------------------------------

export default function NewsPage() {
  return (
    <div>
      <PageTitle title="News" />
      <Container className="my-16 md:my-32 flex flex-col gap-16 md:gap-32">
        {/* <div className="flex flex-col gap-8 md:gap-16">
          <div className="flex flex-col gap-3">
            <p className="text-gray-600 text-justify">
              Green Planet Eco's mission is to assist individuals and businesses of every kind in combating climate change. Thousands of millions of individuals desire to have a significant impact on climate change, but do not know where to begin. This is where the ECO AI App from Green Planet Eco comes in.
            </p>
            <p className="text-gray-600 text-justify">
              There is a carbon cost associated with every action you perform throughout your daily routine. Offsets assist in rebalancing the system and funding improved solutions.
            </p>
            <p className="text-gray-600 text-justify">
              Green Planet Eco will make the offsets process easier for everyone; therefore, we will simplify and modernise this entire system that thousands of people would have to follow to offset their carbon footprint. Therefore, we will design an AL application that is transparent, user-friendly, and simply enjoyable to use.
            </p>
          </div>

          <Swiper
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 30
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 30
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 30
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 30
              }
            }}
            pagination={{ clickable: true }}
            modules={[Pagination]}
          >
            {APP_IMAGES.map(imageItem => (
              <SwiperSlide key={imageItem.id}>
                <Card className="bg-gray-900">
                  <CardBody className="p-2">
                    <img src={imageItem.imgSrc} alt="logo" className="rounded-lg" />
                  </CardBody>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="flex flex-col gap-6">
            {QAS.map(dataItem => (
              <div className="flex flex-col gap-3" key={dataItem.id}>
                <h2 className="text-black font-bold text-xl">{dataItem.question}</h2>
                {dataItem.answer.split('<br />').map((answerItem, index) => (
                  <p className="text-gray-600 text-justify" key={index}>{answerItem}</p>
                ))}
              </div>
            ))}

          </div>
        </div> */}

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