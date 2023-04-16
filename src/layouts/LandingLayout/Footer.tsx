import React from 'react'
import { Button, IconButton } from '@material-tailwind/react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import { SOCIAL_LINKS } from '../../utils/constants';
import Input from '../../components/Input';
import Container from '../../components/Container';
import { INavLink } from '../../utils/interfaces';

// -----------------------------------------------------------------------------------

interface IProps {
  className?: string;
}

// -----------------------------------------------------------------------------------

const QUICK_LINKS: Array<INavLink> = [
  {
    id: 1,
    label: 'Home',
    path: '/'
  },
  {
    id: 2,
    label: 'About',
    path: '/about'
  },
  {
    id: 3,
    label: 'Learn',
    path: '/learn'
  },
  {
    id: 4,
    label: 'Events',
    path: '/events'
  },
  {
    id: 5,
    label: "Portfolio",
    path: "/portfolio"
  },
  {
    id: 6,
    label: "News",
    path: "/news"
  },
  {
    id: 7,
    label: "Contact us",
    path: "/contact-us"
  }
]

// -----------------------------------------------------------------------------------

export default function Footer({ className = '' }: IProps) {
  return (
    <div className={className}>
      <div className="bg-gray-900 py-10 md:py-20">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
            {/* Logo */}
            <div className="flex flex-col gap-4 md:gap-8">
              <Link className="flex items-center gap-4" to="/">
                <img src="/assets/images/logo_dark.png" className="w-10" />
                <span className="font-extrabold text-green-600 text-xl">Green Planet Echo</span>
              </Link>
              <p className="text-sm text-white font-semibold leading-6">
                Breno Is a Fully Responsive Green Energy Fund Raising Theme.
              </p>
              <div className="flex items-center gap-1">
                {SOCIAL_LINKS.map(dataItem => (
                  <IconButton key={dataItem.id} className="bg-primary shadow-none rounded-md">
                    <a href={dataItem.url} target="_blank">
                      <Icon icon={dataItem.icon} className="text-white text-lg" />
                    </a>
                  </IconButton>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h2 className="text-white text-xl font-bold">Quick Links</h2>
              <div className="h-1 w-6 bg-primary mt-2" />
              <div className="grid grid-cols-2 mt-4 md:mt-8">
                {QUICK_LINKS.map(dataItem => (
                  <div key={dataItem.id} className="flex items-center">
                    <Icon icon="ic:round-keyboard-arrow-right" className="text-primary text-lg" />
                    <Button variant="text" className="text-white text-sm capitalize font-normal px-1 py-2">
                      <Link to={dataItem.path || ''}>
                        {dataItem.label}
                      </Link>
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            {/* Get in Touch */}
            <div>
              <h2 className="text-white text-xl font-bold">Get In Touch</h2>
              <div className="h-1 w-6 bg-primary mt-2" />

              <div className="flex flex-col gap-4 mt-4 md:mt-8">
                <p className="text-sm text-white font-semibold leading-6">
                  If you want to more information about us just enter your email
                </p>
                <Input placeholder="Email Address" className="rounded-xl text-lg py-3" />
                <div>
                  <Button className="rounded-full bg-primary shadow-none text-base px-8">Go</Button>
                </div>
              </div>

            </div>
          </div>
        </Container>
      </div>

      <div className="border-t border-gray-700 bg-gray-900 py-6">
        <p className="text-center text-white text-sm">
          Copyrights © {new Date().getFullYear()} <span className="text-primary">Green Planet Echo</span>
        </p>
      </div>
    </div>
  )
}