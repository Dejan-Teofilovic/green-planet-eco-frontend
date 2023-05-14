import React, { lazy } from 'react';
import { Navigate, useRoutes } from "react-router-dom";

// --------------------------------------------------------------------------------------

const LandingLayout = lazy(() => import('./layouts/LandingLayout'))
const HomePage = lazy(() => import('./pages/HomePage'))
const LearnPage = lazy(() => import('./pages/LearnPage'))
const LearnItemPage = lazy(() => import('./pages/LearnItemPage'))
const EventsPage = lazy(() => import('./pages/CarbonCreditPage'))
const PortfolioPage = lazy(() => import('./pages/PortfolioPage'))
const NewsPage = lazy(() => import('./pages/NewsPage'))
const ContactUsPage = lazy(() => import('./pages/ContactUsPage'))
const TokenPage = lazy(() => import('./pages/about/TokenPage'))
const CampaignPage = lazy(() => import('./pages/about/CampaignPage'))
const WhoWeArePage = lazy(() => import('./pages/about/WhoWeArePage'))
const CompanyHistoryPage = lazy(() => import('./pages/about/CompanyHistoryPage'))
const OurTeamPage = lazy(() => import('./pages/about/OurTeamPage'))
const TestimonialsPage = lazy(() => import('./pages/about/TestimonialsPage'))
const FaqPage = lazy(() => import('./pages/about/FaqPage'))
const NoPage = lazy(() => import('./pages/NoPage'))

// --------------------------------------------------------------------------------------

export default function Routes() {
  return useRoutes([
    {
      element: <LandingLayout />,
      children: [
        {
          path: '/',
          element: <HomePage />
        },
        {
          path: '/learn',
          element: <LearnPage />
        },
        {
          path: '/learn/:id',
          element: <LearnItemPage />
        },
        {
          path: '/carbon-credit',
          element: <EventsPage />
        },
        {
          path: '/portfolio',
          element: <PortfolioPage />
        },
        {
          path: '/news',
          element: <NewsPage />
        },
        {
          path: '/contact-us',
          element: <ContactUsPage />
        },
        {
          path: '/about',
          children: [
            {
              path: 'token',
              element: <TokenPage />
            },
            {
              path: 'campaigns',
              element: <CampaignPage />
            },
            {
              path: 'who-we-are',
              element: <WhoWeArePage />
            },
            {
              path: 'company-history',
              element: <CompanyHistoryPage />
            },
            {
              path: 'our-team',
              element: <OurTeamPage />
            },
            {
              path: 'testimonials',
              element: <TestimonialsPage />
            },
            {
              path: 'faq',
              element: <FaqPage />
            },
            {
              path: '',
              element: <Navigate to="token" replace />
            },
            {
              path: '*',
              element: <Navigate to="token" replace />
            }
          ]
        },
        {
          path: '*',
          element: <NoPage />
        }
      ]
    }
  ]);
}