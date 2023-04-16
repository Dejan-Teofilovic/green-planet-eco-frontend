import React from "react"
import { Button } from "@material-tailwind/react"
import { Link } from "react-router-dom"
import Container from "../../components/Container"
import TinyDashedBar from "../../components/TinyDashedBar"

// -----------------------------------------------------------------------------------

export default function HeroSection() {
  return (
    <div className="relative bg-[#0F0F0F] md:pt-28 md:pb-28 pt-28 pb-0" id="hero">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          <div className="flex flex-col gap-4 items-center md:items-start">
            <h1 className="text-primary uppercase font-extrabold text-4xl md:text-6xl text-center md:text-left">Save the World</h1>
            <p className="text-white capitalize font-semibold text-xl md:text-3xl leading-8 md:leading-10 text-center md:text-left">Planting trees in your<br /> surrouding</p>
            <TinyDashedBar />

            <div className="mt-8">
              <Button className="bg-primary shadow-none text-base capitalize rounded-full px-12">
                <Link to="/learn">
                  Read More
                </Link>
              </Button>
            </div>
          </div>

          <div className="hidden md:block">
            <img src="/assets/images/hero.jpg" alt="hero" />
          </div>
        </div>
      </Container>

      <div className="md:absolute w-full mt-24 md:mt-0">
        <Container className="px-0 md:px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 items-center">
            <div className="flex flex-col items-center gap-6 py-10 md:py-20 px-8 bg-white">
              <Link to="/about/campaigns">
                <img src="/assets/images/hero_donate.png" alt="" />
              </Link>
              <Link to="/about/campaigns" className="font-extrabold text-center text-2xl">Give Donation</Link>
              <p className="text-gray-400 text-center">
                Your contribution used locally to help charitable causes and support the organization, Support.
              </p>
            </div>

            <div className="flex flex-col items-center gap-6 py-10 md:py-40 px-8 bg-primary rounded-none md:rounded-xl">
              {/* <img src="/assets/images/hero_medal.png" alt="" />
              <h2 className="font-extrabold text-center text-2xl text-white">Become Volunteer</h2>
              <p className="text-gray-200 text-center">
                Your contribution used locally to help charitable causes and support the organization, Support.
              </p> */}
              <p className="text-white text-center text-4xl font-black">Crypto System</p>
              <p className="text-white text-center text-4xl font-black">Buy Crypto</p>
            </div>

            <div className="flex flex-col items-center gap-6 py-10 md:py-20 px-8 bg-white">
              <img src="/assets/images/hero_donate.png" alt="" />
              <h2 className="font-extrabold text-center text-2xl">Quick Fundraise</h2>
              <p className="text-gray-400 text-center">
                Your contribution used locally to help charitable causes and support the organization, Support.
              </p>
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}