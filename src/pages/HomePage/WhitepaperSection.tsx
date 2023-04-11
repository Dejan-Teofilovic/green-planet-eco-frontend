import React from "react";
import Container from "../../components/Container";
import TinyDashedBar from "../../components/TinyDashedBar";

// ------------------------------------------------------------------------------------

interface IWhitepaper {
  id: number;
  title: string;
  description: string;
}

// ------------------------------------------------------------------------------------

const WHITEPAPER: Array<IWhitepaper> = [
  {
    id: 1,
    title: 'Abstract:',
    description: 'Green Planet Eco is an environmentally-focused company with a mission to help communities and businesses worldwide create sustainable projects. Our vision is to create a future where individuals and businesses can work together to build a more sustainable world. We believe that a sustainable future is achievable by harnessing the power of technology and collaborating with communities to create innovative solutions.'
  },
  {
    id: 2,
    title: 'Introduction:',
    description: 'Climate change and environmental degradation are critical global issues that require urgent attention. The effects of climate change are already being felt in many parts of the world, with the potential for catastrophic consequences. Green Planet Eco is an environmental company that is committed to creating a more sustainable future for all. Our goal is to work with communities and businesses to build sustainable projects that promote energy efficiency, reduce carbon emissions, and encourage sustainable practices.'
  },
  {
    id: 3,
    title: 'Our Mission:',
    description: "At Green Planet Eco, our mission is to empower communities and businesses worldwide to create sustainable projects. We believe that by working together, we can achieve a more sustainable future. We offer a range of services that include consultation, project management, and implementation of customized solutions tailored to our clients' specific sustainability objectives. Our team of experts works closely with our clients to develop innovative solutions that promote energy efficiency, reduce carbon emissions, and encourage sustainable practices."
  },
  {
    id: 4,
    title: 'Our Approach:',
    description: 'Our approach is rooted in technology, innovation, and collaboration. We believe that technology can play a vital role in creating sustainable projects that are cost-effective and efficient. We work with our clients to understand their sustainability goals and develop solutions that are tailored to their specific needs. Our team of experts has extensive experience in project management, and we use a proven methodology to ensure successful project delivery.'
  },
  {
    id: 5,
    title: 'Consultation:',
    description: 'We work with our clients to understand their sustainability goals and develop solutions that align with their objectives. Our team of experts provides consultation services that include energy audits, sustainability assessments, and feasibility studies. We help our clients identify areas where they can improve their sustainability practices and reduce their carbon footprint.'
  },
  {
    id: 6,
    title: 'Project Management:',
    description: 'Our team of project managers has extensive experience in managing sustainable projects from start to finish. We use a proven methodology that ensures project success and delivers measurable results. We provide project planning, budgeting, scheduling, risk management, and quality control services to ensure successful project delivery.'
  },
  {
    id: 7,
    title: 'Implementation:',
    description: "We implement customized solutions tailored to our clients' specific sustainability objectives. Our solutions promote energy efficiency, reduce carbon emissions, and encourage sustainable practices.We provide implementation services for renewable energy projects, waste management, water conservation, sustainable agriculture, and green building design."
  },
  {
    id: 8,
    title: 'Training and Education:',
    description: 'We offer training and education services to help our clients implement sustainable practices and technologies. We provide customized training programs that include workshops, seminars, and online courses. Our goal is to empower our clients with the knowledge and skills they need to create a more sustainable future.'
  },
  {
    id: 9,
    title: 'Conclusion:',
    description: 'Green Planet Eco is committed to creating a more sustainable future for all. We believe that by working together, we can achieve a world that is environmentally sustainable and economically viable. Our services are designed to help communities and businesses worldwide create sustainable projects that promote energy efficiency, reduce carbon emissions, and encourage sustainable practices. We are dedicated to leveraging technology, innovation, and collaboration to create a better future for all.'
  }
]

// ------------------------------------------------------------------------------------

export default function WhitepaperSection() {
  return (
    <div className="bg-white py-16 md:py-36">
      <Container id="whitepaper">
        <h1 className="text-gray-900 text-3xl md:text-5xl text-center font-extrabold capitalize">
          Whitepaper
        </h1>
        <div className="flex justify-center">
          <TinyDashedBar className="mt-6 md:mt-8" />
        </div>

        <div className="mt-8 flex flex-col gap-4">
          {WHITEPAPER.map(dataItem => (
            <div key={dataItem.id}>
              <h2 className="font-bold text-lg">{dataItem.title}</h2>
              <p className="text-gray-500 mt-2">{dataItem.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}