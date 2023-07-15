import { lazy } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';
import Container from '../../components/Container'
import TinyDashedBar from '../../components/TinyDashedBar';
import { PROFILES, SERVICES } from '../../utils/constants';

// -----------------------------------------------------------------------------

const PageTitle = lazy(() => import('../../components/PageTitle'))
const ProfileCard = lazy(() => import('../../components/ProfileCard'))

// -----------------------------------------------------------------------------

interface IValue {
  id: number;
  value: string;
  label: string;
  imgSrc: string;
}

// -----------------------------------------------------------------------------

const VALUES: Array<IValue> = [
  {
    id: 1,
    value: '0',
    label: 'Trees Planted',
    imgSrc: '/assets/images/green_tree.png'
  },
  {
    id: 2,
    value: '0',
    label: 'Solar Panels',
    imgSrc: '/assets/images/green_solar.png'
  },
  {
    id: 3,
    value: '0',
    label: 'Wildlife Saved',
    imgSrc: '/assets/images/green_elephant.png'
  },
  {
    id: 4,
    value: '0',
    label: 'Served Water',
    imgSrc: '/assets/images/green_water.png'
  }
]

// -----------------------------------------------------------------------------

export default function WhoWeArePage() {
  return (
    <div>
      <PageTitle title="Who we are" />
      <div className="my-16 md:my-32 flex flex-col gap-16 md:gap-32">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map(dataItem => (
              <div key={dataItem.id} className="rounded-2xl px-8 py-10 bg-white flex flex-col items-center">
                <img src={dataItem.imgSrc} alt={dataItem.title} />
                <h2 className="text-gray-800 text-center text-2xl font-bold mt-8">{dataItem.title}</h2>
                <p className="text-gray-600 text-center mt-4">{dataItem.description}</p>
              </div>
            ))}
          </div>
        </Container>

        <div className="bg_who_we_are py-10 md:py-28">
          <Container>
            <div className="hidden md:flex justify-between">
              {VALUES.map(dataItem => (
                <div key={dataItem.id} className="flex items-center gap-4">
                  <img src={dataItem.imgSrc} alt={dataItem.label} />
                  <div>
                    <p className="text-3xl lg:text-4xl font-bold lg:font-extrabold text-white">{dataItem.value}</p>
                    <p className="mt-2 text-base lg:text-lg font-bold lg:font-extrabold text-white">{dataItem.label}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex md:hidden justify-center">
              <div className="w-fit flex flex-col gap-8">
                {VALUES.map(dataItem => (
                  <div className="flex items-center gap-8" key={dataItem.id}>
                    <div><img src={dataItem.imgSrc} /></div>
                    <div className="flex flex-col">
                      <span className="text-3xl font-extrabold text-white">{dataItem.value}</span>
                      <span className="text-lg font-bold text-white capitalize">{dataItem.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </div>

        <Container>
          <h2 className="text-gray-900 text-3xl md:text-5xl text-center font-extrabold capitalize">
            Our Team
          </h2>
          <div className="flex justify-center mt-6 md:mt-8">
            <TinyDashedBar />
          </div>

          <div className="mt-8 md:mt-16">
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
                  slidesPerView: 3,
                  spaceBetween: 30
                }
              }}
              pagination={{ clickable: true }}
              modules={[Pagination]}
            >
              {PROFILES.map(dataItem => (
                <SwiperSlide key={dataItem.id}>
                  <ProfileCard data={dataItem} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </Container>
      </div>
    </div>
  )
}