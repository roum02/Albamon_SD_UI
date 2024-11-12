import classNames from 'classnames';
import { HomeBrandBannerBffResponse } from '@apollo-client/type';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import React from 'react';

interface CardProps {
cardData: CardDataProps;
}

interface CardDataProps {
  collection: HomeBrandBannerBffResponse[];
  column: number;
  row: number;
  resultCode: string;
  resultMessage: string;
  totalCount: number;
}

export const CardList = ({ cardData }: CardProps) => {
  const {collection = [], totalCount, column = 1, row = 1} = cardData || {};
  return (
    <>
      {collection.length > 0 && (
        <Swiper
          //loop={totalCount > viewSize}
          className={classNames('swiper-wrap')}
        >
          {collection.map((item, i) => (
            <SwiperSlide key={`slide-${i}`}>
              <section>
                <div
                    className={classNames('swiper-cards-wrap')}
                     style={{
                       display: 'grid',
                       gridTemplateColumns: `repeat(${column}, 1fr)`,
                       gridTemplateRows: `repeat(${row}, auto)`,
                       gap: '10px',
                     }}
                >
                  {collection.map(
                    (cardData: HomeBrandBannerBffResponse, idx: number) =>
                      cardData === undefined ? (
                        <div key={idx} className={classNames('card-wrap')} />
                      ) : (
                        <Card key={`card-${idx}`} {...cardData} />
                      )
                  )}
                </div>
              </section>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
};

const Card = (cardData: HomeBrandBannerBffResponse) => {
  return (
    <a>
      <div className={classNames('card-wrap')}>
        <div className={classNames('card-top-img-wrap')}>
          <div className={classNames('card-top-img')}>
            <img
              src={cardData.franchiseLogo}
              alt={`${cardData.franchiseName} 기업 로고`}
              width={70}
              height={28}
            />
          </div>
        </div>
        <div className={classNames('card-title')}>{cardData.franchiseName}</div>
      </div>
    </a>
  );
};
