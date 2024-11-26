import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './Carousel.module.scss';

export const Carousel = ({ ...props }) => (
  <div
    style={{
      backgroundColor: props.backgroundColor,
      paddingTop: props.paddingTop,
      paddingBottom: props.paddingBottom,
      paddingLeft: props.paddingLeft,
      paddingRight: props.paddingRight,
    }}
  >
    <div className={styles.wrapper}>
      <div className={styles.contents}>
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
            stretch: 0,
            modifier: 0,
            slideShadows: false,
          }}
          modules={[Autoplay]}
          className={styles.swiper}
          speed={1000}
        >
          {props.children.map((item, idx) => (
            <SwiperSlide key={'CAROUSEL_' + idx}>
              <img
                src={item.props.imageUrl}
                style={{
                  width: item.props.width,
                  height: item.props.height,
                  borderRadius: 10,
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  </div>
);
