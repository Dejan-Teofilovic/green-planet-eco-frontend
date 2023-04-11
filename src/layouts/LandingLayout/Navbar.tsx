import React, { useMemo, useState } from 'react'
import { Button, IconButton, MenuHandler, Menu, MenuList, MenuItem } from '@material-tailwind/react'
import { Icon } from '@iconify/react'
import { Link, useLocation } from 'react-router-dom'
import useMobileMenu from '../../hooks/useMobileMenu'
import { SOCIAL_LINKS, NAV_LINKS } from '../../utils/constants'

// -------------------------------------------------------------------------------

export default function Navbar() {
  const { pathname } = useLocation()
  const { openMenu, closeMenu, opened } = useMobileMenu()

  const [isShadow, setIsShadow] = useState<boolean>(false)
  const [reachedSectionId, setReachedSectionId] = useState<number>(1)

  const icon = useMemo<string>(() => {
    if (opened) {
      return 'akar-icons:cross'
    } else {
      return 'material-symbols:menu-rounded'
    }
  }, [opened])

  const toggleMobileMenu = () => {
    if (opened) {
      return closeMenu()
    } else {
      return openMenu()
    }
  }

  const toggleShadow = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 100) {
      setIsShadow(true)
    } else if (scrolled <= 100) {
      setIsShadow(false)
    }
  }

  window.addEventListener('scroll', toggleShadow);

  return (
    <div className="sticky top-0 z-20">
      <div className={`relative ${isShadow && 'shadow-2xl'}`}>
        {/* Topbar */}
        <div className="bg-primary py-1 hidden lg:block">
          <div className="container max-w-6xl mx-auto flex items-center justify-between">
            <span className="tracking-wider text-white text-sm font-semibold">Providing awesome since 2001 years</span>
            <div className="flex items-center gap-4">
              <span className="tracking-wider text-white text-sm font-semibold">Have any questions? 1 (541) 754-3010</span>
              <div className="flex items-center">
                {SOCIAL_LINKS.map(dataItem => (
                  <IconButton variant="text" key={dataItem.id} className="text-white text-lg">
                    <a target="_blank" href={dataItem.url}>
                      <Icon icon={dataItem.icon} />
                    </a>
                  </IconButton>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Navbar */}
        <div className="relative bg-white px-6 py-4 z-20">
          <div className="container max-w-6xl mx-auto">
            <div className="flex justify-between items-center">
              <img src="/assets/images/logo.png" alt="Logo" className="w-32" />

              {/* For Desktop */}
              <div className="hidden lg:flex gap-1">
                {NAV_LINKS.map(dataItem => {
                  if (dataItem.children) {
                    return (
                      <Menu key={dataItem.id}>
                        <MenuHandler>
                          <Button
                            variant="text"
                            className="capitalize text-sm text-grey-800"
                          >
                            {dataItem.label}
                          </Button>
                        </MenuHandler>
                        <MenuList>
                          {dataItem.children.map(childItem => (
                            <MenuItem key={childItem.id} className={`text-sm ${pathname === childItem.path ? 'text-primary' : 'text-grey-800'}`}>
                              <Link to={childItem.path || ''}>
                                {childItem.label}
                              </Link>
                            </MenuItem>
                          ))}
                        </MenuList>
                      </Menu>
                    )
                  } else {
                    return (
                      <Button
                        key={dataItem.id}
                        variant="text"
                        className={`capitalize text-sm ${pathname === dataItem.path ? 'text-primary' : 'text-grey-800'}`}
                      >
                        <Link to={dataItem.path || ''}>
                          {dataItem.label}
                        </Link>
                      </Button>
                    )
                  }
                })}
                {/* {NAV_BUTTONS.map(dataItem => (
                  <Button
                    key={dataItem.id}
                    variant="text"
                    className={`capitalize text-sm ${reachedSectionId === dataItem.id ? 'text-primary' : 'text-grey-800'}`}
                  >
                    <Link to={dataItem.path || ''}>
                      {dataItem.label}
                    </Link>
                  </Button>
                ))} */}
              </div>

              {/* For Mobile */}
              <IconButton
                variant="text"
                className="text-3xl flex lg:hidden text-primary"
                onClick={toggleMobileMenu}
              >
                <Icon icon={icon} />
              </IconButton>
            </div>
          </div>
        </div>

        {opened && (
          <div className={`absolute w-full flex lg:hidden flex-col items-center bg-primary ${isShadow && 'shadow-2xl'}`}>
            {/* {NAV_BUTTONS.map(dataItem => (
              <Button variant="text" className="text-white text-sm" key={dataItem.id}>
                <ScrollLink to={dataItem.sectionId} spy smooth offset={-70} duration={500} onSetActive={() => setReachedSectionId(dataItem.id)}>
                  {dataItem.label}
                </ScrollLink>
              </Button>
            ))} */}
            {NAV_LINKS.map(dataItem => {
              if (dataItem.children) {
                return (
                  <Menu key={dataItem.id}>
                    <MenuHandler>
                      <Button
                        variant="text"
                        className="capitalize text-sm text-white"
                      >
                        {dataItem.label}
                      </Button>
                    </MenuHandler>
                    <MenuList>
                      {dataItem.children.map(childItem => (
                        <MenuItem key={childItem.id} className={`text-sm ${pathname === childItem.path ? 'text-primary' : 'text-gray-800'}`}>
                          <Link to={childItem.path || ''}>
                            {childItem.label}
                          </Link>
                        </MenuItem>
                      ))}
                    </MenuList>
                  </Menu>
                )
              } else {
                return (
                  <Button
                    key={dataItem.id}
                    variant="text"
                    className={`capitalize text-sm ${pathname === dataItem.path ? 'text-green-900' : 'text-white'}`}
                  >
                    <Link to={dataItem.path || ''}>
                      {dataItem.label}
                    </Link>
                  </Button>
                )
              }
            })}
          </div>
        )}
      </div>
    </div>
  )
}