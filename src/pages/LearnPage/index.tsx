import React, { lazy } from 'react'
import Container from '../../components/Container'
import { LEARNS } from '../../utils/constants'

// -----------------------------------------------------------------------

const PageTitle = lazy(() => import('../../components/PageTitle'))
const LearnItem = lazy(() => import('./LearnItem'))

// -----------------------------------------------------------------------

export default function LearnPage() {
  return (
    <div>
      <PageTitle title="Learn" />
      <Container className="my-16 md:my-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {LEARNS.map(dataItem => (
            <div key={dataItem.id}>
              <LearnItem data={dataItem} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}