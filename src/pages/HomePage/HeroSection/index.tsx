import { lazy } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Navigation } from "swiper";

//  ------------------------------------------------------------------------------------------------------------

const Slider1 = lazy(() => import('./Slider1'));
const Slider2 = lazy(() => import('./Slider2'));
const ThreeBlocks = lazy(() => import('./ThreeBlocks'));

//  ------------------------------------------------------------------------------------------------------------

export default function HeroSection() {
  return (
    <div className="relative">
      <Swiper
        spaceBetween={30}
        effect="fade"
        navigation={true}
        modules={[EffectFade, Navigation]}
        autoplay
      >
        <SwiperSlide>
          <Slider1 />
        </SwiperSlide>
        <SwiperSlide>
          <Slider2 />
        </SwiperSlide>
      </Swiper>
      <ThreeBlocks />
    </div>
  )
}