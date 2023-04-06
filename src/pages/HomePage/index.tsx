import React, { lazy } from 'react'

// --------------------------------------------------------------------------

const HeroSection = lazy(() => import('./HeroSection'))
const AboutSection = lazy(() => import('./AboutSection'))

// --------------------------------------------------------------------------

export default function HomePage() {
  return (
    <div className="flex flex-col gap-36">
      <HeroSection />
      <AboutSection />
    </div>
  )
}