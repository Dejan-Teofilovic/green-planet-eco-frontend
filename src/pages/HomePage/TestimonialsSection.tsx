import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';
import { Avatar } from "@material-tailwind/react";
import Container from "../../components/Container";
import TinyDashedBar from "../../components/TinyDashedBar";
import { ITestimonialData } from "../../utils/interfaces";

// ----------------------------------------------------------------------------------

const TESTIMONIALS: Array<ITestimonialData> = [
  {
    id: 1,
    name: 'John Doe',
    avatarSrc: '/assets/images/avatar_testimonials.jpg',
    position: 'CEO',
    comment: 'Mauris id enim id purus ornare tincidunt. Aenean vel consequat risus. Proin viverra nisi at nisl imperdiet auctor. Donec ornare,'
  },
  {
    id: 2,
    name: 'John Doe',
    avatarSrc: '/assets/images/avatar_testimonials.jpg',
    position: 'CEO',
    comment: 'Mauris id enim id purus ornare tincidunt. Aenean vel consequat risus. Proin viverra nisi at nisl imperdiet auctor. Donec ornare,'
  },
  {
    id: 3,
    name: 'John Doe',
    avatarSrc: '/assets/images/avatar_testimonials.jpg',
    position: 'CEO',
    comment: 'Mauris id enim id purus ornare tincidunt. Aenean vel consequat risus. Proin viverra nisi at nisl imperdiet auctor. Donec ornare,'
  },
  {
    id: 4,
    name: 'John Doe',
    avatarSrc: '/assets/images/avatar_testimonials.jpg',
    position: 'CEO',
    comment: 'Mauris id enim id purus ornare tincidunt. Aenean vel consequat risus. Proin viverra nisi at nisl imperdiet auctor. Donec ornare,'
  }
]

// ----------------------------------------------------------------------------------

export default function TestimonialsSection() {
  return (
    <div className="bg_testimonials py-16 md:py-36" id="testimonials">
      <Container>
        <div className="grid grid-cols-7">
          <div className="col-span-7 md:col-span-3">
            <h1 className="text-white text-3xl md:text-5xl font-extrabold capitalize text-center md:text-left">Testimonials</h1>
            <div className="flex justify-center md:justify-start mt-6 md:mt-8">
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
                    <div className="bg-white px-16 py-12 relative rounded-3xl">
                      <div className="flex items-center gap-4">
                        <div>
                          <Avatar src={dataItem.avatarSrc} alt={dataItem.name} variant="circular" size="xs" />
                        </div>
                        <div className="flex flex-col items-start gap-2">
                          <span className="text-primary font-bold capitalize">{dataItem.name}</span>
                          <span className="text-primary-500">{dataItem.position}</span>
                        </div>
                      </div>

                      <p className="text-gray-600 mt-8 text-left text-sm">{dataItem.comment}</p>

                      <div className="bg-primary rounded-tl-3xl rounded-br-3xl h-8 w-16 absolute top-0 left-0" />
                      <div className="bg-primary rounded-tl-3xl rounded-br-3xl h-8 w-16 absolute bottom-0 right-0" />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}