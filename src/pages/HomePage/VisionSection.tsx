import React from "react";
import Container from "../../components/Container";
import TinyDashedBar from "../../components/TinyDashedBar";

// ------------------------------------------------------------------------------

interface ICardData {
  id: number;
  imgSrc: string;
  name: string;
  description: string;
}

// ------------------------------------------------------------------------------

const CARDS: Array<ICardData> = [
  {
    id: 1,
    imgSrc: '/assets/images/green_wind.png',
    name: 'Wind Energy',
    description: 'Mauris id enim id purus ornare tincidunt.'
  },
  {
    id: 2,
    imgSrc: '/assets/images/green_recycle.png',
    name: 'Recycling',
    description: 'Mauris id enim id purus ornare tincidunt.'
  },
  {
    id: 3,
    imgSrc: '/assets/images/green_car.png',
    name: 'Solar Energy',
    description: 'Mauris id enim id purus ornare tincidunt.'
  },
  {
    id: 4,
    imgSrc: '/assets/images/green_eco.png',
    name: 'Reforestation',
    description: 'Mauris id enim id purus ornare tincidunt.'
  },
  {
    id: 5,
    imgSrc: '/assets/images/green_earth.png',
    name: 'Energy Saving',
    description: 'Mauris id enim id purus ornare tincidunt.'
  },
  {
    id: 6,
    imgSrc: '/assets/images/green_electricity.png',
    name: 'Green Technology',
    description: 'Mauris id enim id purus ornare tincidunt.'
  }
]

// ------------------------------------------------------------------------------

export default function VisionSection() {
  return (
    <Container id="vision" className="flex flex-col items-center gap-6 md:gap-8">
      <h1 className="text-gray-900 text-3xl md:text-5xl text-center font-extrabold capitalize">
        Vision
      </h1>
      <TinyDashedBar />
      <div className="max-w-3xl mx-auto">
        <p className="text-gray-600 text-center">
          We're on a mission to make the world a greener place. Our environmental company creates sustainable projects that help communities and businesses thrive while protecting the planet.<br />
          Join us in building a better future for all.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {CARDS.map(dataItem => (
          <div key={dataItem.id} className="bg-white p-8 rounded-xl flex gap-6 relative z-10">
            <div>
              <img src={dataItem.imgSrc} alt="" />
            </div>
            <div className="flex flex-col gap-6">
              <h2 className="text-xl font-bold">{dataItem.name}</h2>
              {/* <p className="text-gray-600 text-sm">{dataItem.description}</p> */}
            </div>
            <div className="vision_card_triangle absolute top-0 right-0" />
          </div>
        ))}
      </div>
    </Container>
  )
}