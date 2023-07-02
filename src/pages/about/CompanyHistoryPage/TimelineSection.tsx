import React from "react";
import { Icon } from "@iconify/react";
import Container from "../../../components/Container";
import TinyDashedBar from "../../../components/TinyDashedBar";

// ---------------------------------------------------------------------------------------

interface ITimeData {
  id: number;
  title: string;
  tasks: Array<{
    id: number;
    task: string;
  }>
}

// ---------------------------------------------------------------------------------------

const TIMELINE: Array<ITimeData> = [
  {
    id: 1,
    title: 'Project formation Phase',
    tasks: [
      {
        id: 1,
        task: 'Concept Gerneration'
      },
      {
        id: 2,
        task: 'Website Development'
      },
      {
        id: 3,
        task: 'Smart Contract Development'
      },
      {
        id: 4,
        task: 'KYC & Smart Contract Audit'
      },
      {
        id: 5,
        task: 'Formulate Marketing'
      },
      {
        id: 6,
        task: 'Establish a Social Network Community'
      },
      {
        id: 7,
        task: 'Partnerships'
      }
    ]
  },
  {
    id: 2,
    title: 'Starting Phase',
    tasks: [
      {
        id: 1,
        task: 'Initial Marketing Rollout'
      },
      {
        id: 2,
        task: 'Awareness on Coin Listing Sites'
      },
      {
        id: 3,
        task: 'Seed Round Sale'
      }
    ]
  },
  {
    id: 3,
    title: 'Listing Phase',
    tasks: [
      {
        id: 1,
        task: 'Listing 1 - Listing distribution of 50,000,000 ECO Tokens'
      },
      {
        id: 2,
        task: 'Listing 2 - Listing distribution of 60,000,000 ECO Tokens'
      },
      {
        id: 3,
        task: 'Listing 3 - Listing distribution of 80,000,000 ECO Tokens'
      },
      {
        id: 4,
        task: 'Listing 4 - Listing distribution of 105,000,000 ECO Tokens'
      }
    ]
  },
  {
    id: 4,
    title: 'Developments',
    tasks: [
      {
        id: 1,
        task: 'Press Release & Media Drop'
      },
      {
        id: 2,
        task: 'Digital Events'
      },
      {
        id: 3,
        task: '1000+ Holders'
      },
      {
        id: 4,
        task: 'ECO App Development'
      },
      {
        id: 5,
        task: 'Partnership developments'
      }
    ]
  },
  {
    id: 5,
    title: 'Launch Phase',
    tasks: [
      {
        id: 1,
        task: 'Investing on Campaign'
      },
      {
        id: 2,
        task: 'Development of Educational Projects'
      },
      {
        id: 3,
        task: 'Partnerships'
      },
      {
        id: 4,
        task: 'Aggressive Marketing'
      },
      {
        id: 5,
        task: 'ECO App launch phase'
      },
      {
        id: 6,
        task: 'App Marketing release'
      },
      {
        id: 7,
        task: 'Verra & The Gold Standards and others'
      },
      {
        id: 8,
        task: 'Certification'
      },
      {
        id: 9,
        task: 'Carbon Credit Project Developments'
      }
    ]
  },
]

// ---------------------------------------------------------------------------------------

export default function TimelineSection() {
  return (
    <Container>
      <h2 className="text-gray-900 text-3xl md:text-5xl text-center font-extrabold capitalize">
        Company History
      </h2>
      <div className="flex justify-center mt-6 md:mt-8">
        <TinyDashedBar />
      </div>

      {/* Desktop */}
      <div className="hidden md:flex flex-col mt-16">
        {TIMELINE.map((dataItem, index) => {
          if (index % 2 === 0) {
            return (
              <div key={dataItem.id} className="grid grid-cols-2">
                <div className="col-span-1 pb-16">
                  <div className="w-[92%] bg-white px-8 py-8 relative rounded-md shadow-lg">
                    <h3 className="text-left text-2xl font-extrabold">{dataItem.title}</h3>
                    <ul className="mt-4 list-disc pl-4">
                      {dataItem.tasks.map(taskItem => (
                        <li key={taskItem.id} className="text-gray-600">{taskItem.task}</li>
                      ))}
                    </ul>

                    <div className="absolute right-[-14.2%] top-[1%] flex items-center">
                      <Icon
                        icon="ic:sharp-arrow-right"
                        className="text-5xl text-white"
                      />
                      <div className="bg-gray-100 rounded-full p-2">
                        <Icon icon="ion:leaf" className="text-primary text-4xl" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className={`col-span-1 ${index + 1 !== TIMELINE.length && 'border-l-4 border-gray-400'}`}>
                </div>
              </div>
            )
          } else {
            return (
              <div key={dataItem.id} className="grid grid-cols-2">
                <div className="col-span-1" />

                <div className="col-span-1 flex justify-end pb-16 border-l-4 border-gray-400">
                  <div className="w-[92%] bg-white px-8 py-8 rounded-md relative shadow-lg">
                    <h3 className="text-left text-2xl font-extrabold">{dataItem.title}</h3>
                    <ul className="mt-4 list-disc pl-4">
                      {dataItem.tasks.map(taskItem => (
                        <li key={taskItem.id} className="text-gray-600">{taskItem.task}</li>
                      ))}
                    </ul>
                    <div className="absolute left-[-14.2%] top-[1%] flex items-center">
                      <div className="bg-gray-100 rounded-full p-2">
                        <Icon icon="ion:leaf" className="text-primary text-4xl" />
                      </div>
                      <Icon
                        icon="ic:sharp-arrow-left"
                        className="text-5xl text-white"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )
          }
        })}
      </div>

      {/* Mobile */}
      <div className="block md:hidden mt-16 pl-4">
        {TIMELINE.map(dataItem => (
          <div key={dataItem.id} className="flex justify-end pb-8 border-l-4 border-gray-400">
            <div className="w-[86%] bg-white shadow-lg px-8 py-8 rounded-md relative">
              <h3 className="text-left text-xl font-extrabold">{dataItem.title}</h3>
              <ul className="mt-4 list-disc pl-4">
                {dataItem.tasks.map(taskItem => (
                  <li key={taskItem.id} className="text-gray-600">{taskItem.task}</li>
                ))}
              </ul>
              <div className="absolute left-[-27.5%] top-[1%] flex items-center">
                <div className="bg-gray-100 rounded-full p-2">
                  <Icon icon="ion:leaf" className="text-primary text-4xl" />
                </div>
                <Icon
                  icon="ic:sharp-arrow-left"
                  className="text-5xl text-white"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  )
}