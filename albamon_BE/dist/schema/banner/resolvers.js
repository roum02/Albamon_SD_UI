export const bannerResolvers = {
    Query: {
        getPromotionBanners: async () => {
            // 임시 더미 데이터
            return {
                promotionBannerCount: 2,
                promotionBanners: [
                    {
                        bannerNo: 33,
                        bannerImageUrl: "//test-imgs.albamon.kr/images/main/mobile/promotion/202408/lcjzlo20135733.jpg",
                        bannerTitle: "보스몬 투표 테스트",
                        alternateTitle: "보스몬 투표 테스트",
                        bannerLinkUrl: "https://test-bossmon.albamon.com/bossmon/event/difficultVote",
                        appMenuNo: "",
                        bannerBackGroundColor: "46CDCF",
                    },
                    {
                        bannerNo: 7,
                        bannerImageUrl: "//test-imgs.albamon.kr/images/main/mobile/promotion/202405/jljhur20165855.png",
                        bannerTitle: "ABTI 테스트",
                        alternateTitle: "ABTI 테스트",
                        bannerLinkUrl: "https://mts3.albamon.com/alba-talk/abti",
                        appMenuNo: "",
                        bannerBackGroundColor: "FF501B",
                    },
                ],
            };
        },
    },
};
