import React from "react";
import Container from "../../components/Container";
import TinyDashedBar from "../../components/TinyDashedBar";

// ------------------------------------------------------------------------------------

interface IWhitepaper {
  id: number;
  // title: string;
  description: string;
}

// ------------------------------------------------------------------------------------

const WHITEPAPER: Array<IWhitepaper> = [
  {
    id: 1,
    // title: 'Abstract:',
    description: 'Green Planet Eco is at the forefront of leveraging blockchain technology to drive investments in sustainable causes and empower individuals to offset their carbon footprint. With a strong commitment to environmental sustainability, Green Planet Eco utilizes the transparency, security, and efficiency of blockchain to create an innovative platform for positive change.'
  },
  {
    id: 2,
    // title: 'Introduction:',
    description: 'By harnessing the power of blockchain, Green Planet Eco connects eco-conscious investors with impactful sustainable projects. Through their platform, individuals can invest in initiatives such as renewable energy, reforestation, waste management, and other environmentally friendly projects. The blockchain ensures transparency and immutability, providing investors with a clear view of where their funds are allocated and how they are making a difference.'
  },
  {
    id: 3,
    // title: 'Our Mission:',
    description: "Green Planet Eco is also developing a user-friendly mobile application that harnesses the power of blockchain technology to help users measure and offset their carbon footprint. The app will enable users to calculate their emissions across various aspects of their daily lives, including transportation, energy consumption, and lifestyle choices. The app also ensures accurate tracking and verification of carbon reduction efforts, allowing users to effectively offset their carbon footprint."
  },
  {
    id: 4,
    // title: 'Our Approach:',
    description: 'Through the Green Planet Eco app, users will have access to a variety of carbon offset credit plans. These projects will be carefully selected based on rigorous sustainability criteria, ensuring their positive impact on the environment. The app will facilitate secure transactions using blockchain technology, ensuring that every offset contribution is allocated to the chosen project with transparency and integrity.'
  },
  {
    id: 5,
    // title: 'Consultation:',
    description: 'Green Planet Eco envisions a global community of environmentally conscious individuals united in their commitment to combat climate change and create a sustainable future. By harnessing the power of blockchain, the organization aims to make sustainable investing accessible and transparent while empowering individuals to take meaningful actions to offset their carbon footprint.'
  },
  {
    id: 6,
    // title: 'Consultation:',
    description: 'Join Green Planet Eco on their mission to build a greener future. Through the innovative use of blockchain technology, we can drive investments in sustainable causes, provide tools to offset carbon footprints, and inspire individuals to make a positive impact on the environment. Together, we can create a sustainable world for future generations.'
  }
]

// ------------------------------------------------------------------------------------

export default function WhitepaperSection() {
  return (
    <div className="bg-white py-16 md:py-36">
      <Container id="whitepaper">
        <h1 className="text-gray-900 text-3xl md:text-5xl text-center font-extrabold capitalize">
          Green Planet Eco on Blockchain Ecosystem
        </h1>
        <div className="flex justify-center">
          <TinyDashedBar className="mt-6 md:mt-8" />
        </div>

        <div className="mt-8 flex flex-col gap-4">
          {WHITEPAPER.map(dataItem => (
            <div key={dataItem.id}>
              {/* <h2 className="font-bold text-lg">{dataItem.title}</h2> */}
              <p className="text-gray-600 mt-2">{dataItem.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}