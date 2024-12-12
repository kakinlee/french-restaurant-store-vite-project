import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules'; 
import './slide.scss';
import slide0 from './assets/img/slide/slide_0.jpg';
import slide1 from './assets/img/slide/slide_1.jpg';
import slide2 from './assets/img/slide/slide_2.jpg';
import slide3 from './assets/img/slide/slide_3.jpg';
import slide4 from './assets/img/slide/slide_4.jpg';
 
 
function Slide() {
  // const [count, setCount] = useState(0)
  return (
    <>
    <Swiper loop={true} pagination={true}  navigation={true} modules={[Navigation,Pagination]} className="mySwiper">
        <SwiperSlide>
        <img src={slide0}/>
        </SwiperSlide>
        <SwiperSlide>
        <img src={slide1} /></SwiperSlide>
        <SwiperSlide>
        <img src={slide2} /></SwiperSlide>
        <SwiperSlide>
        <img src={slide3} /></SwiperSlide>
        <SwiperSlide>
        <img src={slide4} /></SwiperSlide>
      </Swiper>
    </>
  )
}

export default Slide
