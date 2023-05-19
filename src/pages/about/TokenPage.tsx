import React from "react";
import Container from "../../components/Container";
import PageTitle from "../../components/PageTitle";
import TinyDashedBar from "../../components/TinyDashedBar";

const { VITE_CONTRACT_ADDRESS } = import.meta.env

export default function TokenPage() {
  return (
    <div>
      <PageTitle title="ECO Token" />
      <Container className="my-16 md:my-32 flex flex-col">
        <div>
          <h1 className="text-black text-3xl md:text-5xl font-extrabold capitalize text-center">Tokenomics</h1>
          <div className="flex justify-center mt-6 md:mt-8">
            <TinyDashedBar />
          </div>
        </div>

        <div className="flex flex-col gap-12 md:gap-24 mt-8 md:mt-16">
          <div className="flex justify-center">
            <img src="/assets/images/tokenomics.jpg" alt="tokenomics" className="w-full lg:w-[70%]" />
          </div>
          <div className="flex justify-center">
            <span className="font-bold">Token Address:</span>&nbsp;
            <a target="_blank" href={`https://etherscan.io/token/${VITE_CONTRACT_ADDRESS}`} className="text-primary">{VITE_CONTRACT_ADDRESS}</a>
          </div>
          <div className="flex-1 flex flex-col gap-4">
            <p className="text-gray-600">
              Eco Token is a groundbreaking digital currency built on the Ethereum blockchain, dedicated to promoting and supporting ecological initiatives and sustainable practices worldwide. It represents a significant step towards a greener and more sustainable future, empowering individuals, organizations, and businesses to actively contribute to environmental conservation and make a positive impact on our planet.
            </p>
            <p className="text-gray-600">
              Leveraging the power of blockchain technology, Eco Token offers a transparent, secure, and decentralized platform for conducting eco-friendly transactions. It ensures the integrity and traceability of each transaction, fostering trust and accountability within the community.
            </p>
            <p className="text-gray-600">
              As an ERC-20 compliant token, Eco Token seamlessly integrates with a wide range of decentralized applications (DApps) and Ethereum wallets, enabling users to easily manage and exchange their tokens. This compatibility enhances accessibility, making it convenient for individuals and businesses to engage in eco-conscious activities and support environmentally friendly projects.
            </p>
            <p className="text-gray-600">
              Eco Token serves as both a medium of exchange and a store of value, providing users with the opportunity to invest in and support sustainable initiatives. Every transaction made with Eco Token contributes to the development and implementation of ecological projects, including renewable energy infrastructure, waste reduction and recycling programs, conservation efforts, and sustainable agriculture practices.
            </p>
            <p className="text-gray-600">
              By embracing Eco Token, individuals and organizations showcase their commitment to sustainability and actively contribute to a global movement focused on addressing pressing environmental challenges. Together, we can create a more sustainable world, where ecological responsibility and technological innovation go hand in hand, through the power of Eco Token on the Ethereum blockchain.
            </p>
          </div>
        </div>
      </Container>
    </div>
  )
}