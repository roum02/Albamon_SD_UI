import { ReactNode } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import classNames from 'classnames';

interface MainBannerProps {
  promotionBannerData: PromotionBannerData;
}

interface PromotionBannerData {
  promotionBannerCount: number;
  promotionBanners: PromotionBannerBffResponse[];
}

interface PromotionBannerBffResponse {
  alternateTitle: string;
  appMenuNo: number;
  bannerBackGroundColor: string;
  bannerImageUrl: string;
  bannerLinkUrl: string;
  bannerNo: number;
}

interface BannerItem {
  src: string;
  alt?: string;
  linkUrl?: string;
  textContent?: ReactNode;
  isAbsolute?: boolean;
  bannerGroupNo?: number;
  backgroundColor?: string;
}

export const MainBanner = ({ promotionBannerData }: MainBannerProps) => {
  const imageSlide = promotionBannerData.promotionBanners || [];

  return (
    <div className={classNames('full-width', 'image-banner')}>
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        spaceBetween={50}
        slidesPerView={1}
      >
        {imageSlide.map((item, index) => (
          <SwiperSlide key={index}>
            {renderContent({
              src: item.bannerImageUrl,
              alt: item.alternateTitle,
              linkUrl: item.bannerLinkUrl,
            })}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const renderContent = ({ src, alt = '', linkUrl }: BannerItem) => (
  <div className={'image-banner__box'}>
    {src && (
      <a href={linkUrl} target="_blank" rel="noopener noreferrer">
        <img
          // TODO 데이터의 이미지 경로 수정 필요!
          //src={`${process.env['NEXT_PUBLIC_IMAGE_DEV']}${src}`}
          src={`https:${src}`}
          className={'image-banner__img'}
          alt={alt}
          style={{ width: '100%' }}
        />
      </a>
    )}
  </div>
);
