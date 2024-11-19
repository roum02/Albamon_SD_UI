import { gql } from '@apollo/client';

export const GET_CARDS = gql`
  query GetCards {
    getCards {
      resultCode
      resultMessage
      totalCount
      row
      column
      collection {
        franchiseCode
        franchiseName
        franchiseLogo
        keywordCode
        keywordName
        partCode
        partName
      }
    }
  }
`;

export const GET_PROMOTION_BANNER = gql`
  query GetPromotionBanners {
    getPromotionBanners {
      promotionBannerCount
      promotionBanners {
        bannerImageUrl
        bannerTitle
        alternateTitle
        appMenuNo
        bannerBackGroundColor
        bannerLinkUrl
        bannerNo
      }
    }
  }
`;
