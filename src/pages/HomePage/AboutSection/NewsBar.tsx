import React from "react"
import Marquee from "react-fast-marquee"

export default function NewsBar() {
  return (
    <div>
      <Marquee direction="right">
        <img src="/assets/images/news_logo_btc.png" alt="news logo" className="w-48" />
      </Marquee>
    </div>

  )
}