import React from "react";
import { Link, useParams } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import { Icon } from "@iconify/react";
import { LEARNS } from "../../utils/constants";

// -------------------------------------------------------------------------------

export default function SideLearnNav() {
  const { id } = useParams()

  return (
    <div>
      <h2 className="text-2xl font-black">Learn</h2>
      <div className="bg-primary w-8 h-1 mt-2" />

      <div className="flex flex-col gap-1 mt-8">
        {LEARNS.map(dataItem => {
          if (dataItem.id === Number(id)) {
            return (
              <Link key={dataItem.id} to={`/learn/${dataItem.id}`}>
                <Button className="bg-primary border border-primary rounded-none flex items-center gap-4 shadow-none hover:shadow-none w-full text-base capitalize">
                  <Icon icon="ion:leaf" />
                  {dataItem.title}
                </Button>
              </Link>
            )
          } else {
            return (
              <Link key={dataItem.id} to={`/learn/${dataItem.id}`}>
                <Button className="bg-white border border-gray-300 text-black rounded-none flex items-center gap-4 shadow-none hover:shadow-none w-full text-base capitalize">
                  <Icon icon="ion:leaf" />
                  {dataItem.title}
                </Button>
              </Link>
            )
          }
        })}
      </div>
    </div>
  )
}