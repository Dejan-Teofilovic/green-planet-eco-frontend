import React, { lazy } from 'react'

// --------------------------------------------------------------------------

const HeroSection = lazy(() => import('./HeroSection'))

// --------------------------------------------------------------------------

export default function HomePage() {
  return (
    <div className="flex flex-col gap-24 bg-gray-100">
      <HeroSection />
    </div>
  )
}