import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export const Carousel = ({ ...props }) => (
  console.log(props),
  (
    <Swiper
      slidesPerView={2}
      centeredSlides={true}
      loop={true}
      spaceBetween={4}
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
      }}
      coverflowEffect={{
        rotate: 0,
        stretch: 20,
        modifier: 0,
        slideShadows: false,
      }}
      modules={[Autoplay]}
      className={`swiper`}
      speed={1000}
    >
      {props.children.map((item, idx) => (
        // <div key={'CAROUSEL_' + idx}>
        <SwiperSlide style={{ width: '100%' }}>
          <img
            src={item.props.imageUrl}
            style={{ width: item.props.width, height: item.props.height }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
);
