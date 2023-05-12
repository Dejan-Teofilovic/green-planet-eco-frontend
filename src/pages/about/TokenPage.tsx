import React from "react";
import Container from "../../components/Container";
import PageTitle from "../../components/PageTitle";
import TinyDashedBar from "../../components/TinyDashedBar";
import { CONTRACT_ADDRESS } from "../../utils/constants";

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
            <a target="_blank" href={`https://etherscan.io/token/${CONTRACT_ADDRESS}`} className="text-primary">{CONTRACT_ADDRESS}</a>
          </div>
          <div className="flex-1 flex flex-col gap-4">
            <p className="text-gray-600">
              At the heart of our ECO blockchain is the idea of creating a secure and trustworthy
              platform for trading environmental assets, such as carbon credits and renewable
              energy certificates. By leveraging the transparency and immutability of ECO
              blockchain, our website enables organizations and individuals to track and verify the
              impact of their environmental initiatives. This, in turn, creates a platform for trading
              environmental assets, incentivizing and financing climate action.
            </p>
            <p className="text-gray-600">
              Our ECO blockchain is designed to be user-friendly, with an intuitive interface that
              makes it easy for anyone to participate in environmental markets. The platform
              allows for the creation of smart contracts, which are self-executing contracts that
              automatically enforce the terms of an agreement. This feature makes it possible to
              automate the trading of environmental assets, reducing the need for intermediaries
              and making the process more efficient and cost-effective.
            </p>
            <p className="text-gray-600">
              One of the key features of our ECO blockchain is its focus on transparency and
              accountability. All transactions on the platform are recorded on a distributed ledger,
              which is transparent and immutable. This means that all stakeholders can track the
              movement of environmental assets, ensuring that they are not double-spent or
              fraudulently claimed. Additionally, our platform provides real-time data on the
              environmental impact of each transaction, making it easy for organizations to
              measure the effectiveness of their environmental initiatives.
            </p>
            <p className="text-gray-600">
              Our ECO blockchain is a powerful tool that can be used to promote environmental
              causes by creating a transparent and secure platform for trading environmental
              assets. With its focus on incentivizing and financing climate action, our platform has
              the potential to drive significant positive change and contribute to a more
              sustainable future.
            </p>
            <p className="text-gray-600">
              Green Planet conducts all transactions using ECO Token, including purchases,
              donations, and carbon credit purchases. By using ECO Token, we ensure that our
              transactions are transparent, secure, and promote sustainable technologies. Using
              our ECO Token in all transactions will increase the sustainability of our Token price.
            </p>
          </div>
        </div>
      </Container>
    </div>
  )
}