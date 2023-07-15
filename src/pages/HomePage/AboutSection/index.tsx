import React, { lazy } from "react";
import { Icon } from "@iconify/react";
import Container from "../../../components/Container";
import TinyDashedBar from "../../../components/TinyDashedBar";

const NewsBar = lazy(() => import('./NewsBar'))

export default function AboutSection() {
  return (
    <div className="md:mt-24 flex flex-col gap-16 md:gap-24">
      <NewsBar />
      <Container id="about">
        <div className="grid grid-cols-1 md:grid-cols-11 gap-16 items-center">
          <div className="col-span-6 md:col-span-5 relative">
            <img src="/assets/images/children.jpg" alt="" className="rounded-lg" />

            <div className="absolute top-[55%] w-full flex justify-end">
              <div className="bg-primary p-3 w-[70%] rounded-tl-full rounded-bl-full flex items-center gap-4">
                <div className="rounded-full bg-gray-100 border-8 border-gray-300 border-opacity-60 p-2 md:p-3 lg:p-6 animate-pulse">
                  <a href="https://youtu.be/-iM6o895M80" target="_blank">
                    <Icon icon="material-symbols:play-arrow-rounded" className="text-4xl text-primary" />
                  </a>
                </div>

                <div>
                  <p className="text-white font-extrabold capitalize text-lg md:text-base lg:text-2xl">Want to Watch</p>
                  <p className="text-white font-bold text-sm md:text-sm lg:text-base">Climate Change Warning</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-6">
            <h2 className="text-primary text-sm uppercase font-bold">About Us</h2>
            <div className="flex flex-col gap-4 md:gap-8">
              <h3 className="text-gray-900 text-3xl md:text-4xl font-extrabold leading-tight">
                We are Taking Small Steps to Make Earth Better Planet
              </h3>

              <TinyDashedBar />

              <p className="text-gray-600">
                Green Planet Eco was created to provide a range of innovative technologies and services that are
                designed to help communities and businesses build a better world to live in. Our team of experts is
                dedicated to creating sustainable solutions that address a wide range of environmental challenges,
                from climate change to resource depletion. With our cutting-edge technologies, we can help you
                reduce your environmental impact, improve energy efficiency, and promote sustainable practices
                that benefit both people and the planet. Our services include project design, consultation, and
                implementation of customized solutions that align with your sustainability goals. Whether you are a
                business or a community looking to make a positive impact on the environment, we have the
                expertise and technology to help you succeed. Let us help you harness the power of technology to
                build a better world for future generations.
              </p>
            </div>

            <div className="mt-6 md:mt-12 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <Icon icon="material-symbols:add-circle-rounded" className="text-xl text-primary" />
                <p className="text-gray-600">Protect and enhance environment for future generations.</p>
              </div>
              <div className="flex items-center gap-3">
                <Icon icon="material-symbols:add-circle-rounded" className="text-xl text-primary" />
                <p className="text-gray-600">Ecosystems are imperative to maintaining a healthy planet.</p>
              </div>
              <div className="flex items-center gap-3">
                <Icon icon="material-symbols:add-circle-rounded" className="text-xl text-primary" />
                <p className="text-gray-600">Help protect the environment and sustain its natural resources.</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>

  )
}