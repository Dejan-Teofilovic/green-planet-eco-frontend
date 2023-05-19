import React from "react"
import Marquee from "react-fast-marquee"

export default function NewsBar() {
  return (
    <div>
      <Marquee direction="right">
        <a href="https://www.newsbtc.com/press-releases/green-planet-eco-the-future-is-calling-us-join-our-pre-sale-today/" target="_blank">
          <img src="/assets/images/news_logo_btc.png" alt="news logo" className="w-48" />
        </a>
      </Marquee>
    </div>

  )
}