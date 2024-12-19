import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import './slide.scss';
import slide1 from '../../public/assets/img/slide/1920/slide1920-1.jpg';
import slide2 from '../../public/assets/img/slide/1920/slide1920-2.jpg';
import slide3 from '../../public/assets/img/slide/1920/slide1920-3.jpg';
import slide4 from '../../public/assets/img/slide/1920/slide1920-4.jpg';
import slide0 from '../../public/assets/img/slide/1920/slide1920-5.jpg';


function Slide() {
  // const [count, setCount] = useState(0)
  return (
    <>
      <Swiper loop={true} pagination={true} navigation={true} 
      modules={[Navigation, Pagination]} className="swiper-container">
        <SwiperSlide className='swiper-slide-header'>
          <img className="swiper-slide-header-img"src={slide0} />
        </SwiperSlide>
        <SwiperSlide className='swiper-slide-header'>
          <img className="swiper-slide-header-img"src={slide1} /></SwiperSlide>
        <SwiperSlide className='swiper-slide-header'>
          <img className="swiper-slide-header-img"src={slide2} /></SwiperSlide>
        <SwiperSlide className='swiper-slide-header'>
          <img className="swiper-slide-header-img"src={slide3} /></SwiperSlide>
        <SwiperSlide className='swiper-slide-header'>
          <img className="swiper-slide-header-img"src={slide4} /></SwiperSlide>
      </Swiper>
    </>
  )
}

export default Slide
