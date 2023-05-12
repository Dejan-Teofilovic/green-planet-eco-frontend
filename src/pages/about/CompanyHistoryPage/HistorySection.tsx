import React from "react";
import { Card, CardBody } from "@material-tailwind/react";
import Container from "../../../components/Container";
import TinyDashedBar from "../../../components/TinyDashedBar";

// ---------------------------------------------------------------------------------------

export default function HistorySection() {
  return (
    <Container>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="flex flex-col items-center lg:items-start gap-6 md:gap-8">
          <h2 className="text-primary text-3xl md:text-5xl font-extrabold text-center lg:text-left">
            Green Planet Eco
          </h2>
          <TinyDashedBar />
          <Card className="flex lg:hidden">
            <CardBody className="p-3">
              <img src="/assets/images/history.jpg" alt="company" className="rounded-lg" />
            </CardBody>
          </Card>
          <div className="flex flex-col gap-4">
            <p className="text-gray-600 text-justify">
              Green Planet Eco is a new environmental company that has recently started with a mission to
              promote sustainability and protect the environment through innovative solutions. The company’s
              vision is to create a world where natural resources are used responsibly, and people work in harmony
              with nature to ensure a healthy and sustainable future.
            </p>
            <p className="text-gray-600 text-justify">
              Green Planet Eco is committed to making a positive impact on the world and creating a more
              sustainable future. The company’s mission is to inspire individuals, businesses, and governments to
              take action and contribute to a more sustainable future. Green Planet Eco believes that by working
              together, we can create a world where the environment is valued and protected, and people are
              empowered to make sustainable choices.
            </p>
            <p className="block lg:hidden text-gray-600 text-justify">
              Green Planet Eco’s approach to sustainability is rooted in innovation and collaboration. The
              company’s team of experts is constantly exploring new technologies and ideas to help reduce
              environmental impact and promote sustainability. Green Planet Eco also believes in the power of
              collaboration and works closely with clients, partners, and stakeholders to achieve its mission.
            </p>
            <p className="block lg:hidden text-gray-600 text-justify">
              In conclusion, Green Planet Eco is a new environmental company that is dedicated to promoting
              sustainability and protecting the environment through innovative solutions. The company’s vision
              and mission reflect its commitment to creating a more sustainable future for all. With its focus on
              innovation, collaboration, and customized solutions, Green Planet Eco is well-positioned to make a
              positive impact on the world and inspire others to join its mission.
            </p>
          </div>
        </div>
        <div className="hidden lg:block">
          <Card>
            <CardBody className="p-3">
              <img src="/assets/images/history.jpg" alt="company" className="rounded-lg" />
            </CardBody>
          </Card>
        </div>
      </div>

      <div className="mt-4 hidden lg:flex flex-col gap-4">
        <p className="text-gray-600 text-justify">
          Green Planet Eco’s approach to sustainability is rooted in innovation and collaboration. The
          company’s team of experts is constantly exploring new technologies and ideas to help reduce
          environmental impact and promote sustainability. Green Planet Eco also believes in the power of
          collaboration and works closely with clients, partners, and stakeholders to achieve its mission.
        </p>
        <p className="text-gray-600 text-justify">
          In conclusion, Green Planet Eco is a new environmental company that is dedicated to promoting
          sustainability and protecting the environment through innovative solutions. The company’s vision
          and mission reflect its commitment to creating a more sustainable future for all. With its focus on
          innovation, collaboration, and customized solutions, Green Planet Eco is well-positioned to make a
          positive impact on the world and inspire others to join its mission.
        </p>
      </div>
    </Container>
  )
}