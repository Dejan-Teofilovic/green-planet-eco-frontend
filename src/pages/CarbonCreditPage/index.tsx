import React, { lazy } from "react";
import Container from "../../components/Container";

// -----------------------------------------------------------------------------

const PageTitle = lazy(() => import('../../components/PageTitle'))

// -----------------------------------------------------------------------------

export default function CarbonCreditPage() {
  return (
    <div>
      <PageTitle title="Carbon Credit" />
      <Container className="my-16 md:my-32">
        <p className="text-3xl md:text-5xl font-bold text-center my-16 md:my-32">Upcoming Soon...</p>
      </Container>
    </div>
  )
}