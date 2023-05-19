import React from "react"
import Marquee from "react-fast-marquee"

export default function NewsBar() {
  return (
    <div>
      <Marquee direction="right">
        <div className="flex items-center gap-16 md:gap-60">
          <a href="https://www.newsbtc.com/press-releases/green-planet-eco-the-future-is-calling-us-join-our-pre-sale-today/" target="_blank">
            <img src="/assets/images/news_logo_btc.png" alt="news logo" className="w-48" />
          </a>
          <a href="https://icolink.com/ico-green-planet-eco.html" target="_blank">
            <img src="/assets/images/news_logo_iconlink.png" alt="news logo" className="w-32" />
          </a>
          <a href="https://coinsniper.net/coin/47865" target="_blank" className="pr-16 md:pr-60">
            <img src="/assets/images/news_logo_coinsniper.png" alt="news logo" className="w-56" />
          </a>
        </div>
      </Marquee>
    </div>

  )
}