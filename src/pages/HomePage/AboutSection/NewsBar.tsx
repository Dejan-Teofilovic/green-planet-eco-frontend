import React from "react"
import Marquee from "react-fast-marquee"

export default function NewsBar() {
  return (
    <div>
      <Marquee direction="right" speed={100}>
        <div className="flex items-center gap-16 md:gap-24">
          <a href="https://www.newsbtc.com/press-releases/green-planet-eco-the-future-is-calling-us-join-our-pre-sale-today/" target="_blank">
            <img src="/assets/images/news_logo_btc.png" alt="news btc" className="w-56" />
          </a>
          <a href="https://icolink.com/ico-green-planet-eco.html" target="_blank">
            <img src="/assets/images/news_logo_iconlink.png" alt="iconlink" className="w-32" />
          </a>
          <a href="https://coinsniper.net/coin/47865" target="_blank">
            <img src="/assets/images/news_logo_coinsniper.png" alt="coinsniper" className="w-56" />
          </a>
          <a href="https://medium.com/@giving_flirt_porcupine_407/green-planet-eco-the-future-is-calling-us-join-our-pre-sale-today-2c15414885ec" target="_blank">
            <img src="/assets/images/news_logo_medium.png" alt="medium" className="w-56" />
          </a>
          <a href="https://steemit.com/cryptocurrency/@greenplaneteco/4xkdrs-green-planet-eco-the-future-is-calling-us-join-our-pre-sale-today" target="_blank">
            <img src="/assets/images/news_logo_steemit.png" alt="steemit" className="w-56" />
          </a>
          <a href="https://coincodex.com/ico/green-planet-eco" target="_blank">
            <img src="/assets/images/news_logo_coincodex.png" alt="coincodex" className="w-56" />
          </a>
          <a href="https://coinpedia.org/press-release/green-planet-eco-the-future-is-calling-us-join-our-pre-sale-today/" target="_blank">
            <img src="/assets/images/news_logo_coinpedia.png" alt="coinpedia" className="w-48" />
          </a>
          <a href="https://cointelegraph.com/press-releases/green-planet-announces-eco-token-listing-on-p2b-crypto-exchange" target="_blank">
            <img src="/assets/images/news_logo_cointelegraph.png" alt="cointelegraph" className="w-64" />
          </a>
          <a href="https://www.oneplanetnetwork.org/members-directory/member/17091" target="_blank">
            <img src="/assets/images/news_logo_oneplanet.png" alt="One Planet" className="w-72" />
          </a>
          <a href="https://icoholder.com/en/interview/make-the-earth-better-with-green-planet-eco" target="_blank" className="pr-16 md:pr-24">
            <img src="/assets/images/news_logo_icoholder.png" alt="icoholder" className="w-48" />
          </a>
        </div>
      </Marquee>
    </div>

  )
}