import React from "react";
import Container from "../../components/Container";

// -----------------------------------------------------------------------------

interface IValue {
  id: number;
  value: string;
  label: string;
  imgSrc: string;
}

// -----------------------------------------------------------------------------

const VALUES: Array<IValue> = [
  {
    id: 1,
    value: '0',
    label: 'Tree Saved',
    imgSrc: '/assets/images/white_tree.png'
  },
  {
    id: 2,
    value: '0',
    label: 'Animals Saved',
    imgSrc: '/assets/images/white_elephant.png'
  },
  {
    id: 3,
    value: '0',
    label: 'Solar Installed',
    imgSrc: '/assets/images/white_solar.png'
  },
  {
    id: 4,
    value: '0',
    label: 'Water Resources',
    imgSrc: '/assets/images/white_water.png'
  }
]

// -----------------------------------------------------------------------------

export default function ValuesSection() {
  return (
    <div className="bg_of_values_section py-20">
      <Container>
        <div className="grid grid-cols-4 items-center">
          {VALUES.map((dataItem, index) => {
            if (index + 1 === VALUES.length) {
              return (
                <div className="flex flex-col items-center gap-4" key={dataItem.id}>
                  <img src={dataItem.imgSrc} />
                  <span className="text-5xl font-extrabold text-primary">{dataItem.value}</span>
                  <span className="text-xl font-extrabold text-gray-500 capitalize">{dataItem.label}</span>
                </div>
              )
            } else {
              return (
                <div className="flex flex-col items-center gap-4 border-r border-gray-500" key={dataItem.id}>
                  <img src={dataItem.imgSrc} />
                  <span className="text-5xl font-extrabold text-primary">{dataItem.value}</span>
                  <span className="text-xl font-extrabold text-gray-500 capitalize">{dataItem.label}</span>
                </div>
              )
            }
          })}
        </div>
      </Container>
    </div>
  )
}