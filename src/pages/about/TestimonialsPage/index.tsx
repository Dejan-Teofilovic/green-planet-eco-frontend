import React, { lazy } from 'react'
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination } from 'swiper';
// import { ITestimonialData } from '../../../utils/interfaces'
import Container from '../../../components/Container'
// import TinyDashedBar from '../../../components/TinyDashedBar';
// import { Button } from '@material-tailwind/react';

// -----------------------------------------------------------------------

const PageTitle = lazy(() => import('../../../components/PageTitle'))
// const TestimonialItem = lazy(() => import('./TestimonialItem'))

// -----------------------------------------------------------------------


// const TESTIMONIALS: Array<ITestimonialData> = [
//   {
//     id: 1,
//     name: 'John Doe',
//     avatarSrc: '/assets/images/avatar_testimonials.jpg',
//     position: 'CEO',
//     comment: 'Mauris id enim id purus ornare tincidunt. Aenean vel consequat risus. Proin viverra nisi at nisl imperdiet auctor. Donec ornare,'
//   },
//   {
//     id: 2,
//     name: 'John Doe',
//     avatarSrc: '/assets/images/avatar_testimonials.jpg',
//     position: 'CEO',
//     comment: 'Mauris id enim id purus ornare tincidunt. Aenean vel consequat risus. Proin viverra nisi at nisl imperdiet auctor. Donec ornare,'
//   },
//   {
//     id: 3,
//     name: 'John Doe',
//     avatarSrc: '/assets/images/avatar_testimonials.jpg',
//     position: 'CEO',
//     comment: 'Mauris id enim id purus ornare tincidunt. Aenean vel consequat risus. Proin viverra nisi at nisl imperdiet auctor. Donec ornare,'
//   },
//   {
//     id: 4,
//     name: 'John Doe',
//     avatarSrc: '/assets/images/avatar_testimonials.jpg',
//     position: 'CEO',
//     comment: 'Mauris id enim id purus ornare tincidunt. Aenean vel consequat risus. Proin viverra nisi at nisl imperdiet auctor. Donec ornare,'
//   }
// ]

// -----------------------------------------------------------------------

export default function TestimonialsPage() {
  return (
    <div>
      <PageTitle title="Testimonials" />
      {/* <div className="bg-white py-16 md:py-36">
        <Container>
          <Swiper
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 30
              },
              640: {
                slidesPerView: 1,
                spaceBetween: 30
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 30
              },
              1024: {
                slidesPerView: 1,
                spaceBetween: 30
              }
            }}
            pagination={{ clickable: true }}
            modules={[Pagination]}
          >
            {TESTIMONIALS.map(dataItem => (
              <SwiperSlide key={dataItem.id}>
                <TestimonialItem data={dataItem} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>
      </div>

      <div className="py-16 md:py-36">
        <Container>
          <div className="max-w-3xl">
            <p className="text-primary text-sm uppercase font-bold">Want to Join with us?</p>
            <div className="flex flex-col gap-8">
              <h2 className="text-3xl md:text-5xl font-extrabold">
                Want To Become In <span className="text-primary">Our Team</span>
              </h2>
              <TinyDashedBar />
              <p className="leading-6 md:leading-8">
                Donec placerat mi et tortor bibendum, at accumsan nunc accumsan. Vivamus sed nisl sit amet ex convallis imperdiet. Ut eget egestas libero. Donec placerat mi et tortor bibendum, at accumsan nunc accumsan.
              </p>
              <div>
                <Button className="shadow-none rounded-full bg-primary text-base">Join Now</Button>
              </div>
            </div>
          </div>
        </Container>
      </div> */}
      <Container className="my-16 md:my-32">
        <p className="text-3xl md:text-5xl font-bold text-center">Upcoming Soon...</p>
      </Container>
    </div>
  )
}