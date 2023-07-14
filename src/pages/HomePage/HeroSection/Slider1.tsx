import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useAccount } from "wagmi";
import Container from "../../../components/Container";
import MotionDiv from "../../../components/MotionDiv";
import { varFadeInDown, varFadeInLeft, varFadeInRight, varFadeInUp } from "../../../utils/constants";
import TinyDashedBar from "../../../components/TinyDashedBar";

// -----------------------------------------------------------------------------------------------

interface IProps {
  openDialogAffiliate: Function;
}

// -----------------------------------------------------------------------------------------------

export default function Slider1({ openDialogAffiliate }: IProps) {
  const { isConnected } = useAccount()

  return (
    <Container>
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
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

            <MotionDiv variants={varFadeInRight}>
              <Button
                className="border-primary border-2 bg-transparent shadow-none text-base capitalize rounded-full px-5 md:px-10 hover:shadow-primary"
                disabled={!isConnected}
                onClick={() => openDialogAffiliate()}
              >
                Affiliate Link
              </Button>
            </MotionDiv>
          </div>
        </div>

        <div className="hidden lg:block">
          <MotionDiv variants={varFadeInUp}>
            <img src="/assets/images/hero.jpg" alt="hero" />
          </MotionDiv>
        </div>

        <div className="flex justify-center lg:hidden my-12">
          <MotionDiv variants={varFadeInUp}>
            <a
              target="_blank"
              href="https://app.companiesoffice.govt.nz/companies/app/ui/pages/companies/companyBadgeSnippet/8745289?utm_campaign=companiesdirectlinks&utm_medium=webpage&utm_source=thecompany"
            >
              <img src="https://app.companiesoffice.govt.nz/companies/app/ui/themes/companies/images/CO_Details_light_optimal_WEB.png" alt="Company" />
            </a>
          </MotionDiv>
        </div>
      </div>
    </Container>
  )
}