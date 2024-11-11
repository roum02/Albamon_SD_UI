export const bannerTypes = `
  type PromotionBanner {
    bannerNo: Int!
    bannerImageUrl: String!
    bannerTitle: String!
    alternateTitle: String!
    bannerLinkUrl: String!
    appMenuNo: String
    bannerBackGroundColor: String!
  }

  type PromotionBannerResponse {
    promotionBannerCount: Int!
    promotionBanners: [PromotionBanner!]!
  }
`;
