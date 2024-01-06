// https://swiperjs.com/react

import "./style.css"

import photo1 from "./assets/photo1.jpg"
import photo2 from "./assets/photo2.jpg"
import photo3 from "./assets/photo3.jpg"

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import "swiper/css"
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const SwiperCarousel = () => {
    return(
        <div className="container">
        <h1>SwiperCarousel com Paginação, Navegação e </h1>

        <Swiper slidesPerView={1} modules={[Navigation, Pagination, Scrollbar, A11y]} navigation pagination={{ clickable: true }} className="swiper">
            <SwiperSlide><img src={photo1}></img></SwiperSlide>
            <SwiperSlide><img src={photo2}></img></SwiperSlide>
            <SwiperSlide><img src={photo3}></img></SwiperSlide>
        </Swiper>
        </div>
    )
}

export default SwiperCarousel;