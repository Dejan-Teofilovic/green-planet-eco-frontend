import { Icon } from "@iconify/react";
import { IconButton } from "@material-tailwind/react";

// -------------------------------------------------------------------------------

interface ISocialLink {
  id: number;
  icon: string;
  url: string;
}

interface IInfo {
  id: number;
  icon: string;
  name: string;
  value: string;
}

// -------------------------------------------------------------------------------

const SOCIAL_LINKS: Array<ISocialLink> = [
  {
    id: 1,
    icon: 'ri:facebook-fill',
    url: '#'
  },
  {
    id: 2,
    icon: 'mdi:twitter',
    url: '#'
  },
  {
    id: 3,
    icon: 'ph:instagram-logo-fill',
    url: '#'
  },
  {
    id: 4,
    icon: 'ri:linkedin-fill',
    url: '#'
  }
]

const INFOS: Array<IInfo> = [
  {
    id: 1,
    icon: 'la:map-marked-alt',
    name: 'Main Office',
    value: '236 advice the good, CA'
  },
  {
    id: 2,
    icon: 'ic:baseline-insert-emoticon',
    name: 'Trusted By',
    value: '200000 User'
  },
  {
    id: 3,
    icon: 'clarity:email-line',
    name: 'Email',
    value: 'info@example.com'
  }
]

// -------------------------------------------------------------------------------

export default function Header() {
  return (
    <div>
      {/* Topbar */}
      <div className="bg-primary py-1">
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
      <div className="bg-white py-6">
        <div className="container max-w-6xl mx-auto flex items-center justify-between">
          <img src="/assets/images/logo.png" alt="logo" className="w-36" />
          <div className="flex items-center gap-8">
            {INFOS.map(dataItem => (
              <div key={dataItem.id} className="flex items-center gap-4">
                <div className="border border-dashed border-primary rounded-lg rounded-br-none p-2">
                  <Icon icon={dataItem.icon} className="text-primary text-2xl" />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-lg font-extrabold">{dataItem.name}</span>
                  <span className="text-sm">{dataItem.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navbar */}
      <div className="bg-gray-800"></div>
    </div>
  )
}