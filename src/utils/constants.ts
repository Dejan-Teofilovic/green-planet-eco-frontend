import { Variants } from "framer-motion";
import {
  ILearnData,
  INavButton,
  INavLink,
  IProfileData,
  IServiceData,
  ISocialLink
} from "./interfaces";

export const SOCIAL_LINKS: Array<ISocialLink> = [
  {
    id: 1,
    icon: "ri:facebook-fill",
    url: "https://www.facebook.com/profile.php?id=100091997497224"
  },
  {
    id: 2,
    icon: "mdi:twitter",
    url: "https://twitter.com/GreenPlanetEco"
  },
  {
    id: 3,
    icon: "ph:instagram-logo-fill",
    url: "https://www.instagram.com/greenplaneteco.io/"
  },
  {
    id: 4,
    icon: "ri:linkedin-fill",
    url: "https://www.linkedin.com/company/green-planet-eco"
  }
];

export const NAV_BUTTONS: Array<INavButton> = [
  {
    id: 1,
    label: "Home",
    sectionId: "hero"
  },
  {
    id: 2,
    label: "About",
    sectionId: "about"
  },
  {
    id: 3,
    label: "Vision",
    sectionId: "vision"
  },
  {
    id: 4,
    label: "Whitepaper",
    sectionId: "whitepaper"
  },
  {
    id: 5,
    label: "Testimonials",
    sectionId: "testimonials"
  }
];

export const NAV_LINKS: Array<INavLink> = [
  {
    id: 1,
    label: "Home",
    path: "/"
  },
  {
    id: 2,
    label: "About",
    children: [
      {
        id: 7,
        label: "Token",
        path: "/about/token"
      },
      {
        id: 1,
        label: "Campaigns",
        path: "/about/campaigns"
      },
      {
        id: 2,
        label: "Who we are",
        path: "/about/who-we-are"
      },
      {
        id: 3,
        label: "Company History",
        path: "/about/company-history"
      },
      {
        id: 4,
        label: "Our Team",
        path: "/about/our-team"
      },
      {
        id: 5,
        label: "Testimonials",
        path: "/about/testimonials"
      },
      {
        id: 6,
        label: "Faq",
        path: "/about/faq"
      }
    ]
  },
  {
    id: 3,
    label: "Learn",
    path: "/learn"
  },
  {
    id: 4,
    label: "Carbon Credit",
    path: "/assets/documents/Green Planet Eco - Credit Carbon.pdf",
    isLinkToOutside: true
  },
  {
    id: 5,
    label: "Whitepaper",
    path: "/assets/documents/WHITEPAPER- Green Planet Eco.pdf",
    isLinkToOutside: true
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
];

export const SERVICES: Array<IServiceData> = [
  {
    id: 1,
    title: "Supporting Cause",
    description: "Working towards a greener tomorrow.",
    imgSrc: "/assets/images/who_we_are_donate.png"
  },
  {
    id: 2,
    title: "Most Trusted One",
    description: "Our work is based on transparency.",
    imgSrc: "/assets/images/who_we_are_medal.png"
  },
  {
    id: 3,
    title: "Award Won",
    description: "We are working hard to acquire recognition for our cause.",
    imgSrc: "/assets/images/who_we_are_torch.png"
  }
];

export const LEARNS: Array<ILearnData> = [
  {
    id: 1,
    title: "Saving Water",
    description: `Water is an essential resource for life on our planet. However, many people take this precious
    resource for granted, wasting it without realizing the dire consequences. With increasing population
    growth, climate change, and water scarcity, saving water has become more important than ever
    before.<br />
    Saving water is not just important for the environment, but also for our daily lives. By saving water,
    we can reduce our water bills, conserve energy, and reduce the carbon footprint associated with
    water treatment and transportation. Furthermore, conserving water can help to ensure that there is
    enough water for future generations.<br />
    One of the best ways to save water is to reduce water consumption in our daily lives. Simple actions
    such as turning off the tap while brushing teeth, fixing leaking taps, using low-flow showerheads, and
    reducing shower time can save a significant amount of water. Collecting and reusing rainwater for
    gardening or washing cars can also help to save water.<br />
    Another way to save water is to use water-efficient appliances and fixtures. Upgrading water-efficient
    toilets, washing machines, and dishwashers can save significant amounts of water and reduce water
    bills. Installing low-flow showerheads and faucet aerators can also help to reduce water
    consumption.<br />
    In conclusion, saving water is essential for a sustainable future for all. By reducing water
    consumption, using water-efficient appliances and fixtures, and implementing sustainable practices,
    we can conserve water and ensure a better future. Everyone can do their part to save water, and we
    must take responsibility for our actions to make a positive impact on our environment.`,
    benefits: [
      {
        id: 1,
        title: "Conserving natural resources",
        description: `Water is a precious natural resource, and saving it helps to
        ensure its availability for future generations. Conserving water also helps to protect the
        natural habitats and ecosystems that depend on water.`
      },
      {
        id: 2,
        title: "Saving money",
        description: `Saving water can result in significant savings on water bills, especially if
        water-efficient appliances and fixtures are used. Reducing water consumption can also lead
        to lower energy bills as less energy is needed to heat and transport water.`
      },
      {
        id: 3,
        title: "Preventing water shortages",
        description: `Saving water helps to prevent water shortages in areas where
        water is scarce. By conserving water, we can help to ensure that there is enough water to
        meet the needs of all users, including agriculture, industry, and households.`
      }
    ],
    imgSrc: "/assets/images/learn_water.jpg"
  },
  {
    id: 2,
    title: "Wind Energy",
    description: `Wind energy is a clean and renewable source of energy that has gained popularity in recent years as
    a means of reducing greenhouse gas emissions and combating climate change. It involves harnessing
    the power of wind to generate electricity, which can be used to power homes, businesses, and even
    entire communities.<br />
    One of the primary benefits of wind energy is its environmental sustainability. Unlike fossil fuels,
    wind energy does not emit harmful pollutants or greenhouse gases into the atmosphere, making it a
    cleaner alternative to traditional sources of energy. Wind energy also does not require water for
    operation, unlike some other renewable energy sources such as hydropower, which can help to
    conserve this precious resource.<br />
    Another significant advantage of wind energy is its potential for cost savings. The cost of wind energy
    has been steadily decreasing in recent years, making it increasingly competitive with traditional
    sources of energy. In many cases, wind energy can now be produced at a lower cost than fossil fuels,
    making it an attractive option for businesses and governments looking to reduce their energy costs.<br />
    Wind energy also has the potential to create jobs and support local economies. The construction and
    operation of wind farms can provide job opportunities in manufacturing, installation, maintenance,
    and other related industries. Additionally, wind energy can help to reduce dependence on foreign
    sources of energy, which can help to improve energy security and support local economies.<br />
    Despite its many benefits, wind energy also faces some challenges. Wind energy production can be
    affected by factors such as wind variability and location limitations. Additionally, the construction and
    operation of wind farms can have environmental impacts, such as bird and bat mortality and habitat
    destruction.<br />
    Overall, wind energy has the potential to be a key component of a sustainable energy future. By
    investing in research and development, supporting policies and incentives for wind energy, and
    addressing its challenges, we can harness the power of wind to reduce greenhouse gas emissions,
    save money, and support local economies.`,
    benefits: [
      {
        id: 1,
        title: "Clean and renewable",
        description: `Wind energy produces no harmful emissions or pollutants and does not
        require any fuel input, making it an entirely renewable and clean energy source.`
      },
      {
        id: 2,
        title: "Cost-effective",
        description: `Wind energy has become increasingly cost-effective over time and is now competitive
        with conventional power sources. It can offer long-term cost savings, particularly in areas with good
        wind resources.`
      },
      {
        id: 3,
        title: "Reduced greenhouse gas emissions",
        description: `Wind energy produces no greenhouse gas emissions, making it
        a key contributor to reducing carbon emissions and addressing climate change.`
      }
    ],
    imgSrc: "/assets/images/learn_wind.jpg"
  },
  {
    id: 3,
    title: "Recycling",
    description: `Recycling is an essential practice that helps to reduce waste, conserve resources, and protect the
    environment. It involves the process of converting used materials into new products, which helps to
    reduce the need for virgin materials and minimizes the amount of waste that goes to landfills or
    incinerators.<br />
    One of the most significant benefits of recycling is that it conserves natural resources. By recycling
    materials such as paper, plastic, glass, and metals, we can reduce the amount of raw materials
    needed to produce new products. This helps to conserve resources such as water, minerals, and
    energy, which are all necessary for the production of goods.<br />
    Another important benefit of recycling is that it reduces the amount of waste that ends up in landfills
    or incinerators. This helps to reduce the environmental impact of waste disposal, including the
    emissions of greenhouse gases and the contamination of soil and water. Recycling also helps to
    extend the life of landfills and reduces the need to build new ones, which can be costly and have
    negative impacts on nearby communities.<br />
    Recycling also has economic benefits. It creates jobs in the recycling and manufacturing industries
    and can help to support local economies. Recycling can also reduce the cost of waste disposal for
    individuals and businesses, as recycling is often cheaper than sending waste to landfills or
    incinerators.<br />
    In addition to its environmental and economic benefits, recycling also has social benefits. It promotes
    community engagement and can bring people together around a common goal. Recycling can also
    help to educate people about the importance of sustainability and encourage them to take action to
    protect the environment.<br />
    In conclusion, recycling is an essential practice that has numerous benefits for the environment,
    economy, and society. By recycling materials, we can conserve natural resources, reduce waste, and
    create economic opportunities while protecting the environment. We all have a role to play in
    promoting recycling, and by taking small actions such as properly sorting our waste and supporting
    recycling initiatives in our communities, we can make a significant impact.`,
    benefits: [
      {
        id: 1,
        title: "Waste reduction",
        description: `Recycling helps to reduce the amount of waste that ends up in landfills or
        incinerators, which can help to reduce greenhouse gas emissions and prevent the contamination of
        soil and water.`
      },
      {
        id: 2,
        title: "Energy conservation",
        description: `Recycling can save energy by reducing the need to extract, transport, and
        process raw materials, which can be energy-intensive.`
      },
      {
        id: 3,
        title: "Cost savings",
        description: `Recycling can be less expensive than sending waste to landfills or incinerators, which
        can help to reduce the cost of waste disposal for individuals and businesses.`
      }
    ],
    imgSrc: "/assets/images/learn_recycling.jpg"
  },
  {
    id: 4,
    title: "Solar Panel",
    description: `Solar panels are a technology that harnesses the power of the sun to produce electricity. These
    panels are typically made up of photovoltaic (PV) cells, which are designed to absorb sunlight and
    convert it into usable energy. Solar panels are a clean, renewable source of energy that can be used
    to power homes, businesses, and even entire communities.<br />
    One of the key benefits of solar panels is their environmental friendliness. Unlike traditional energy
    sources, which rely on fossil fuels and can produce harmful emissions, solar panels produce no
    pollution or greenhouse gases. This makes them an attractive option for individuals and organizations
    who are looking to reduce their carbon footprint and contribute to a more sustainable future.<br />
    Another benefit of solar panels is their versatility. They can be installed on rooftops, walls, and even
    on the ground, making them suitable for a wide range of applications. Additionally, solar panels can
    be scaled up or down depending on the energy needs of the user, making them a flexible energy
    solution.<br />
    Finally, solar panels offer a degree of energy independence, allowing individuals and organizations to
    generate their own electricity and reduce their dependence on the grid. This can be particularly
    important in areas with unreliable power sources or high energy costs.<br />
    In conclusion, solar panels are a clean, versatile, and sustainable energy technology that offer a range
    of benefits to users. As the demand for renewable energy continues to grow, solar panels are poised
    to play an increasingly important role in powering our homes, businesses, and communities.`,
    benefits: [
      {
        id: 1,
        title: "Renewable and clean energy",
        description: `Solar panels use energy from the sun, which is a renewable and clean
        energy source. This means that they produce no harmful emissions or pollutants, making them an
        eco-friendly alternative to traditional fossil fuels.`
      },
      {
        id: 2,
        title: "Cost-effective",
        description: `The cost of solar panels has decreased significantly over the past few years, making
        them increasingly affordable for homeowners and businesses. They can offer long-term cost savings
        on electricity bills, especially in areas with high energy costs.`
      },
      {
        id: 3,
        title: "Reduced carbon footprint",
        description: `By using solar panels, homeowners and businesses can significantly
        reduce their carbon footprint and contribute to mitigating climate change.`
      }
    ],
    imgSrc: "/assets/images/learn_solar.jpg"
  },
  {
    id: 5,
    title: "Reforestation",
    description: `Reforestation is the process of planting trees in areas where forests have been lost or degraded. It is
    an important strategy for combatting climate change, protecting biodiversity, and restoring degraded
    landscapes. There are many benefits to reforestation efforts, both locally and globally.
    One of the most significant benefits of reforestation is carbon sequestration.<br /> Trees absorb carbon
    dioxide from the atmosphere and store it in their biomass, helping to mitigate the effects of climate
    change. According to the Food and Agriculture Organization, reforestation efforts have the potential
    to sequester as much as 2.5 billion tons of carbon dioxide each year.
    Reforestation also plays an important role in protecting biodiversity.<br /> Forests provide habitat for a
    wide range of plant and animal species, many of which are threatened by habitat loss and
    fragmentation. By restoring forests, we can help to protect and restore these vital ecosystems.
    In addition, reforestation can have important social and economic benefits. Forests provide valuable
    resources such as timber, non-timber forest products, and medicinal plants, which can support local
    livelihoods and economies.<br /> Reforestation can also help to improve soil quality, reduce erosion, and
    enhance water quality and availability.
    Despite the many benefits of reforestation, there are also challenges associated with these efforts.
    Ensuring the right tree species are planted in the right locations, addressing land use conflicts, and
    managing the growth of the planted trees are just a few of the challenges that must be overcome to
    ensure successful reforestation.
    In conclusion, reforestation is an important strategy for combating climate change, protecting
    biodiversity, and restoring degraded landscapes. While there are challenges associated with these
    efforts, the benefits of reforestation are clear and can have positive impacts locally and globally.`,
    benefits: [
      {
        id: 1,
        title: "Carbon sequestration",
        description: `Trees absorb carbon dioxide from the atmosphere through photosynthesis
        and store it in their biomass, helping to mitigate the effects of climate change. Reforestation can
        therefore help to reduce greenhouse gas emissions and slow the pace of climate change.`
      },
      {
        id: 2,
        title: "Biodiversity conservation",
        description: `Forests are home to a wide range of plant and animal species, many of
        which are threatened by habitat loss and fragmentation. By restoring forests, we can help to protect
        and restore these vital ecosystems, promoting biodiversity and preserving wildlife.`
      },
      {
        id: 3,
        title: "Water conservation",
        description: `Trees help to regulate the water cycle, promoting water infiltration and
        reducing the risk of floods and droughts. They also help to filter and clean water, improving water
        quality and availability.`
      }
    ],
    imgSrc: "/assets/images/learn_reforestation.jpg"
  },
  {
    id: 6,
    title: "Save Forest",
    description: `Forests are an essential part of our planet's ecosystem, providing a home for wildlife, regulating
    climate, and supplying us with clean air and water. Unfortunately, deforestation, forest degradation,
    and forest fires have significantly reduced the size and health of forests around the world. It is crucial
    that we take action to protect and conserve forests to ensure their sustainability for future
    generations.<br />
    There are several ways to save forests. One of the most effective ways is to promote sustainable
    forest management. Sustainable forest management involves managing forests in a way that meets
    the needs of the present without compromising the ability of future generations to meet their own
    needs.<br /> This includes protecting biodiversity, maintaining forest health, and ensuring that forests
    continue to provide social and economic benefits.
    Education and awareness programs can also be implemented to promote forest conservation and
    educate the public about the importance of forests. Regular forest monitoring and assessment can
    help to identify forest areas that are at risk of degradation and prioritize conservation efforts.<br />
    Restoration of degraded and deforested areas is another important step in forest conservation.
    Restoring forests not only helps to reduce carbon emissions but also contributes to improving soil
    health, water quality, and biodiversity. It also provides social and economic benefits to local
    communities through employment opportunities and sustainable forest management practices.<br />
    In conclusion, saving forests is essential for the sustainability of our planet. By promoting sustainable
    forest management, reducing deforestation and forest degradation, educating the public, and
    restoring degraded forest areas, we can ensure the conservation of forests and the benefits they
    provide. We must take responsibility for our actions and make conscious efforts to conserve forests
    to ensure a better future for all.`,
    benefits: [
      {
        id: 1,
        title: "Climate regulation",
        description: `Forests play a vital role in regulating the Earth's climate by absorbing and storing
        carbon dioxide from the atmosphere. Trees absorb carbon dioxide during photosynthesis, which
        helps to reduce greenhouse gas emissions and mitigate climate change.`
      },
      {
        id: 2,
        title: "Biodiversity conservation",
        description: `Forests are home to an incredible array of plant and animal species. By
        protecting forests, we can help to preserve these species and maintain biodiversity.`
      },
      {
        id: 3,
        title: "Cultural significance",
        description: `Forests are often deeply rooted in local cultures and traditions. By conserving
        forests, we can help to preserve these cultural practices and traditions.`
      }
    ],
    imgSrc: "/assets/images/learn_forest.jpg"
  }
];

export const PROFILES: Array<IProfileData> = [
  {
    id: 1,
    name: "Waldenir Moreira",
    position: "CEO",
    bio: "",
    imgSrc: "/assets/images/team_ceo.jpg",
    socialLinks: [
      {
        id: 1,
        icon: "mdi:twitter",
        url: "https://twitter.com/WaldenirMoreira"
      },
      {
        id: 2,
        icon: "jam:linkedin",
        url: "https://www.linkedin.com/in/waldenir-moreira-b6320290/"
      }
    ]
  },
  {
    id: 2,
    name: "Thaynara Silva",
    position: "Project Manager",
    bio: "",
    imgSrc: "/assets/images/team_pm.jpg",
    socialLinks: [
      {
        id: 1,
        icon: "mdi:twitter",
        url: "https://twitter.com/thaynarasilvanz"
      }
    ]
  },
  {
    id: 3,
    name: "Luana Souza",
    position: "Marketing Developer",
    bio: "",
    imgSrc: "/assets/images/team_md.jpg",
    socialLinks: [
      {
        id: 1,
        icon: "mdi:twitter",
        url: "https://twitter.com/luanasouza_MK"
      },
      {
        id: 2,
        icon: "jam:linkedin",
        url: "https://www.linkedin.com/in/luana-souza-080556279/"
      }
    ]
  },
  {
    id: 4,
    name: "Atsuo Koizumi",
    position: "Software Engineer",
    bio: "",
    imgSrc: "/assets/images/team_sd.jpg",
    socialLinks: [
      {
        id: 1,
        icon: "mdi:twitter",
        url: "https://twitter.com/AtsuoKoizu50448"
      },
      {
        id: 2,
        icon: "jam:linkedin",
        url: "https://www.linkedin.com/in/atsuo-koizumi/"
      }
    ]
  },
  // {
  //   id: 5,
  //   name: "Erick Tomas Rojas",
  //   position: "Marketing Manager",
  //   bio: "",
  //   imgSrc: "/assets/images/team_mm.jpg",
  //   socialLinks: [
  //     {
  //       id: 1,
  //       icon: "mdi:twitter",
  //       url: "https://twitter.com/"
  //     }
  //   ]
  // }
];

export const varFadeInUp: Variants = {
  hidden: {
    y: -30,
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4
    }
  }
};

export const varFadeInDown: Variants = {
  hidden: {
    y: 30,
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4
    }
  }
};

export const varFadeInLeft: Variants = {
  hidden: {
    x: -30,
    opacity: 0
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.4
    }
  }
};

export const varFadeInRight: Variants = {
  hidden: {
    x: 30,
    opacity: 0
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.4
    }
  }
};

export const MSG_REQUIRED_FIELD = "Required field.";

export const REGEX_NUMBER_VALID = /^[0-9]*\.?[0-9]*$/;

export const AFFILIATE_TOKEN = "AFFILIATE_TOKEN";
export const QUERY_PARAM_NAME_OF_AFFILIATE_TOKEN = "affiliate-token";

export const WHITELIST_OF_PARTNERS = [
  "0xeb0C7cEAE3088cddCE3Ba427ab15BeBDc499b897",
  "0xf983dd6200b3bb4e34cf8bb51803b18e25422948",
  "0xf122670b84de4ca820be6b919347e7dfaa789f0c",
  "0x5e41A9F729836175F35a216E06aF856dE8B7db01",
  "0xe7A4e3E8742E86D8623e059525c2E8e955746bdB"
];

export const CONTRACT_ABI = [
  { inputs: [], stateMutability: "nonpayable", type: "constructor" },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "Approval",
    type: "event"
  },
  { anonymous: false, inputs: [], name: "EnableTrading", type: "event" },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: "bool", name: "enable", type: "bool" }
    ],
    name: "EnableWalletToWalletTransferWithoutFee",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address"
      },
      { indexed: false, internalType: "bool", name: "isExcluded", type: "bool" }
    ],
    name: "ExcludeFromFees",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address"
      },
      { indexed: false, internalType: "bool", name: "isExcluded", type: "bool" }
    ],
    name: "ExcludedFromMaxTransactionLimit",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "buyFee",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "sellFee",
        type: "uint256"
      }
    ],
    name: "FeesUpdated",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "maxTransferRateBuy",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "maxTransferRateSell",
        type: "uint256"
      }
    ],
    name: "MaxTransactionLimitRatesChanged",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bool",
        name: "maxTransactionLimit",
        type: "bool"
      }
    ],
    name: "MaxTransactionLimitStateChanged",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "OwnershipTransferred",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "pair", type: "address" },
      { indexed: true, internalType: "bool", name: "value", type: "bool" }
    ],
    name: "SetAutomatedMarketMakerPair",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "merkleRoot",
        type: "bytes32"
      }
    ],
    name: "SetMerkleRootOfPartners",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "SetSwappableTokenAmountAtOnce",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenAmount",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "ethAmount",
        type: "uint256"
      }
    ],
    name: "SwapTokenAndSendEthToWallet",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "from", type: "address" },
      { indexed: true, internalType: "address", name: "to", type: "address" },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "Transfer",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "marketingWallet",
        type: "address"
      }
    ],
    name: "WalletOfFundChanged",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "toWallet",
        type: "address"
      }
    ],
    name: "Withdraw",
    type: "event"
  },
  {
    inputs: [],
    name: "INIT_TOTAL_SUPPLY",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "SHARE_OF_COMMUNITY",
    outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "SHARE_OF_ECOSYSTEM",
    outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "SHARE_OF_FOUNDERS",
    outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "SHARE_OF_LISTING",
    outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "SHARE_OF_MARKETING",
    outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "SHARE_OF_PARTNERS",
    outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "SHARE_OF_PRIVATE_SALE",
    outputs: [{ internalType: "uint16", name: "", type: "uint16" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "SHARE_OF_PUBLIC_SALE",
    outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "owner", type: "address" },
      { internalType: "address", name: "spender", type: "address" }
    ],
    name: "allowance",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "spender", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" }
    ],
    name: "approve",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "automatedMarketMakerPairs",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "address", name: "account", type: "address" }],
    name: "balanceOf",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "buyFee",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "_walletOfFund", type: "address" }
    ],
    name: "changeWalletOfFund",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "spender", type: "address" },
      { internalType: "uint256", name: "subtractedValue", type: "uint256" }
    ],
    name: "decreaseAllowance",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "enableTrading",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [{ internalType: "bool", name: "enable", type: "bool" }],
    name: "enableWalletToWalletTransferWithoutFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "account", type: "address" },
      { internalType: "bool", name: "excluded", type: "bool" }
    ],
    name: "excludeFromFees",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "spender", type: "address" },
      { internalType: "uint256", name: "addedValue", type: "uint256" }
    ],
    name: "increaseAllowance",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [{ internalType: "address", name: "account", type: "address" }],
    name: "isExcludedFromFees",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "address", name: "account", type: "address" }],
    name: "isExcludedFromMaxTransaction",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "maxTransactionLimitEnabled",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "maxTransferAmount",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "maxTransferAmountBuy",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "merkleRootOfPartners",
    outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "ownerWallet", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" }
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "bytes32[]", name: "merkleProof", type: "bytes32[]" },
      { internalType: "uint256", name: "amount", type: "uint256" }
    ],
    name: "mintForPartners",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [],
    name: "mintableTokenAmountForFounders",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "mintableTokenAmountForPartners",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "mintableTokenAmountForPrivate",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "mintableTokenAmountForPublic",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "name",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "owner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "uint256", name: "amount", type: "uint256" }],
    name: "privateSale",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [{ internalType: "uint256", name: "amount", type: "uint256" }],
    name: "publicSale",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "sellFee",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "bool", name: "enable", type: "bool" }],
    name: "setEnableMaxTransactionLimit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "account", type: "address" },
      { internalType: "bool", name: "exclude", type: "bool" }
    ],
    name: "setExcludeFromMaxTransactionLimit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_maxTransactionRateBuy",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_maxTransactionRateSell",
        type: "uint256"
      }
    ],
    name: "setMaxTransactionRates",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_merkleRootOfPartners",
        type: "bytes32"
      }
    ],
    name: "setMerkleRootOfPartners",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [{ internalType: "uint256", name: "newAmount", type: "uint256" }],
    name: "setSwappableTokenAmountAtOnce",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "swappableTokenAmountAtOnce",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "tokenPriceForPartners",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "tokenPriceForPrivate",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "tokenPriceForPublic",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "tradingEnabled",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" }
    ],
    name: "transfer",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      { internalType: "address", name: "from", type: "address" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" }
    ],
    name: "transferFrom",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "uniswapV2Pair",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "uniswapV2Router",
    outputs: [
      { internalType: "contract IUniswapV2Router02", name: "", type: "address" }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      { internalType: "uint256", name: "_buyFee", type: "uint256" },
      { internalType: "uint256", name: "_sellFee", type: "uint256" }
    ],
    name: "updateFees",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "walletOfCommunity",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "walletOfEcosystem",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "walletOfFounder1",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "walletOfFounder2",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "walletOfFounder3",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "walletOfFund",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "walletOfListing",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "walletOfMarketing",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "walletOfOwner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "walletToWalletTransferWithoutFee",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [{ internalType: "address", name: "ownerWallet", type: "address" }],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  { stateMutability: "payable", type: "receive" }
];

export const NUMBER_OF_PURCHASED_TOKENS_BY_CASH = 28075714;
