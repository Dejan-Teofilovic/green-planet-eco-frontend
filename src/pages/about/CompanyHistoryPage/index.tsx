import React, { lazy } from "react"

// ---------------------------------------------------------------------------------------

const PageTitle = lazy(() => import('../../../components/PageTitle'))
const HistorySection = lazy(() => import('./HistorySection'))
const TimelineSection = lazy(() => import('./TimelineSection'))

// ---------------------------------------------------------------------------------------

export default function CompanyHistoryPage() {
  return (
    <div className="flex flex-col gap-16 md:gap-36 mb-16 md:mb-36">
      <PageTitle title="Company History" />
      <HistorySection />
      <TimelineSection />
    </div>
  )
}