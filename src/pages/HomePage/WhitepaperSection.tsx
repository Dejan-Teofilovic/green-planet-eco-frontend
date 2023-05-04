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
    description: 'The Green Planet Eco is an innovative and advanced technology that has been implemented on the Ethereum network. Its primary purpose is to address urgent environmental concerns that the planet is currently facing. Its architecture is decentralized, which ensures a reliable, transparent, and efficient system that promotes sustainable practices and facilitates the growth of the green economy.'
  },
  {
    id: 2,
    // title: 'Introduction:',
    description: 'At its core, the Green Planet Eco is powered by a distributed network of nodes that work together to maintain the integrity of the platform. This network is secured by a consensus algorithm that ensures that all transactions are verified and validated before they are added to the blockchain. The use of blockchain technology provides several benefits, including immutability, transparency, and tamper-proof records that are resistant to fraud and manipulation.'
  },
  {
    id: 3,
    // title: 'Our Mission:',
    description: "The Green Planet Eco is also designed to be highly scalable and efficient, enabling it to process a large volume of transactions with minimal energy consumption. This is achieved through the use of innovative technologies, such as sharding and proof-of-stake consensus, that help to reduce the computational power required to maintain the network."
  },
  {
    id: 4,
    // title: 'Our Approach:',
    description: 'One of the key features of the Green Planet Eco is its focus on sustainability and the environment. The platform provides a range of tools and resources that enable individuals and organizations to track and offset their carbon footprint, as well as participate in initiatives that promote sustainable practices and support the green economy.'
  },
  {
    id: 5,
    // title: 'Consultation:',
    description: 'Overall, the Green Planet Eco represents a major step forward in the development of sustainable blockchain technology. Its combination of decentralization, scalability, and environmental focus make it a powerful tool for promoting positive change and driving the transition to a more sustainable future.'
  },
  // {
  //   id: 6,
  //   // title: 'Project Management:',
  //   description: 'Our team of project managers has extensive experience in managing sustainable projects from start to finish. We use a proven methodology that ensures project success and delivers measurable results. We provide project planning, budgeting, scheduling, risk management, and quality control services to ensure successful project delivery.'
  // },
  // {
  //   id: 7,
  //   // title: 'Implementation:',
  //   description: "We implement customized solutions tailored to our clients' specific sustainability objectives. Our solutions promote energy efficiency, reduce carbon emissions, and encourage sustainable practices.We provide implementation services for renewable energy projects, waste management, water conservation, sustainable agriculture, and green building design."
  // },
  // {
  //   id: 8,
  //   // title: 'Training and Education:',
  //   description: 'We offer training and education services to help our clients implement sustainable practices and technologies. We provide customized training programs that include workshops, seminars, and online courses. Our goal is to empower our clients with the knowledge and skills they need to create a more sustainable future.'
  // },
  // {
  //   id: 9,
  //   // title: 'Conclusion:',
  //   description: 'Green Planet Eco is committed to creating a more sustainable future for all. We believe that by working together, we can achieve a world that is environmentally sustainable and economically viable. Our services are designed to help communities and businesses worldwide create sustainable projects that promote energy efficiency, reduce carbon emissions, and encourage sustainable practices. We are dedicated to leveraging technology, innovation, and collaboration to create a better future for all.'
  // }
]

// ------------------------------------------------------------------------------------

export default function WhitepaperSection() {
  return (
    <div className="bg-white py-16 md:py-36">
      <Container id="whitepaper">
        <h1 className="text-gray-900 text-3xl md:text-5xl text-center font-extrabold capitalize">
          Green Planet Eco Blockchain
        </h1>
        <div className="flex justify-center">
          <TinyDashedBar className="mt-6 md:mt-8" />
        </div>

        <div className="mt-8 flex flex-col gap-4">
          {WHITEPAPER.map(dataItem => (
            <div key={dataItem.id}>
              {/* <h2 className="font-bold text-lg">{dataItem.title}</h2> */}
              <p className="text-gray-500 mt-2">{dataItem.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}