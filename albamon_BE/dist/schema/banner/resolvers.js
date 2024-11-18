export const bannerResolvers = {
  Query: {
    getPromotionBanners: async () => {
      // 임시 더미 데이터
      return {
        promotionBannerCount: 5,
        promotionBanners: [
          {
            bannerNo: 32,
            bannerImageUrl:
              "//test-imgs.albamon.kr/images/main/mobile/promotion/202408/pqrizt19094431.png",
            bannerTitle: "알바의 상식 테스트",
            alternateTitle: "알바의 상식 테스트",
            bannerLinkUrl: "https://m.albamon.com",
            appMenuNo: "",
            bannerBackGroundColor: "607FFF",
          },
          {
            bannerNo: 7,
            bannerImageUrl:
              "//test-imgs.albamon.kr/images/main/mobile/promotion/202405/jljhur20165855.png",
            bannerTitle: "ABTI 테스트",
            alternateTitle: "ABTI 테스트",
            bannerLinkUrl: "https://mts3.albamon.com/alba-talk/abti",
            appMenuNo: "",
            bannerBackGroundColor: "FF501B",
          },
          {
            bannerNo: 33,
            bannerImageUrl:
              "//test-imgs.albamon.kr/images/main/mobile/promotion/202408/lcjzlo20135733.jpg",
            bannerTitle: "보스몬 투표 테스트",
            alternateTitle: "보스몬 투표 테스트",
            bannerLinkUrl:
              "https://test-bossmon.albamon.com/bossmon/event/difficultVote",
            appMenuNo: "",
            bannerBackGroundColor: "46CDCF",
          },
          {
            bannerNo: 31,
            bannerImageUrl:
              "//test-imgs.albamon.kr/images/main/mobile/promotion/202408/xemnsz13094903.png",
            bannerTitle: "눜 서비스홍보",
            alternateTitle: "눜 서비스홍보",
            bannerLinkUrl: "https://nooc.onelink.me/8L9K/92d7b9g7",
            appMenuNo: "",
            bannerBackGroundColor: "132D58",
          },
          {
            bannerNo: 36,
            bannerImageUrl:
              "//test-imgs.albamon.kr/images/main/mobile/promotion/202411/pvpcyv07163350.png",
            bannerTitle: "누구나 할 수 있는 쿠팡",
            alternateTitle: "누구나 할 수 있는 쿠팡",
            bannerLinkUrl:
              "https://mts2.albamon.com/jobs/detail/95002274?productCode=mdlgrand",
            appMenuNo: "",
            bannerBackGroundColor: "31b4dd",
          },
        ],
      };
    },
  },
};
