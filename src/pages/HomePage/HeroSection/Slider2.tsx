import { lazy } from "react";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import Container from "../../../components/Container";
import MotionDiv from "../../../components/MotionDiv";
import TinyDashedBar from "../../../components/TinyDashedBar";
import { varFadeInDown, varFadeInLeft, varFadeInUp } from "../../../utils/constants";

//  ----------------------------------------------------------------------------------------------------------

export default function Slider2() {
  return (
    <header className="relative bg-[#0F0F0F] md:pt-28 md:pb-28 pt-28 pb-0" id="hero">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-start">
          <div className="flex flex-col gap-4 items-center lg:items-start">
            <MotionDiv variants={varFadeInUp}>
              <a
                href="https://skynet.certik.com/projects/green-planet-eco?utm_source=SkyEmblem&utm_campaign=green-planet-eco&utm_medium=link" target="_blank"
              >
                <img src="/assets/images/certificate.png" alt="certik" />
              </a>
            </MotionDiv>

            <MotionDiv variants={varFadeInLeft}>
              <h1 className="text-primary uppercase font-extrabold text-4xl md:text-6xl text-center md:text-left !leading-tight">
                Green Planet Eco AI
              </h1>
            </MotionDiv>

            <MotionDiv variants={varFadeInLeft}>
              <p className="text-white capitalize font-semibold text-xl md:text-2xl leading-8 md:leading-10 text-center md:text-left">
                The key to a sustainable future.
              </p>
            </MotionDiv>

            <MotionDiv variants={varFadeInDown}>
              <TinyDashedBar />
            </MotionDiv>

            <div className="mt-8 flex items-center gap-3">
              <MotionDiv variants={varFadeInLeft}>
                <Button className="bg-primary shadow-none text-base capitalize rounded-full px-6 md:px-12 hover:shadow-primary">
                  <Link to="/learn">
                    Read More
                  </Link>
                </Button>
              </MotionDiv>
            </div>
          </div>

          <div className="lg:grid hidden grid-cols-2">
            <MotionDiv variants={varFadeInDown}>
              <div className="relative">
                <div className="relative z-20 w-[430px] ml-[10%]">
                  <img src="/assets/images/fan.png" alt="fan" className="animate-spin" style={{ animationDuration: '6s' }} />
                </div>
                <div className="absolute top-[45%] right-[9%]">
                  <img src="/assets/images/fan-base.png" alt="fanbase" />
                </div>
              </div>
            </MotionDiv>

            <MotionDiv variants={varFadeInDown}>
              <div className="relative">
                <div className="relative z-20 w-[200px] ml-[58%] mt-[65%]">
                  <img src="/assets/images/fan.png" alt="fan" className="animate-spin" style={{ animationDuration: '5s' }} />
                </div>
                <div className="absolute top-[45%] right-[4%] w-5">
                  <img src="/assets/images/fan-base.png" alt="fanbase" />
                </div>
              </div>
            </MotionDiv>
          </div>
        </div>
      </Container>
    </header>
  )
}