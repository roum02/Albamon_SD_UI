export const cardResolvers = {
    Query: {
        getCards: async () => {
            return {
                resultCode: "SUCCESS",
                resultMessage: "성공",
                totalCount: 79,
                row: 2,
                column: 4,
                collection: [
                    {
                        franchiseCode: 46,
                        franchiseName: "던킨",
                        franchiseLogo: "https://imgs.albamon.kr/images/franchise_booth/46/MBrandMain_Logo.gif",
                        keywordCode: "1080001",
                        keywordName: "",
                        partCode: "1080",
                        partName: "",
                    },
                    {
                        franchiseCode: 47,
                        franchiseName: "CJ 올리브영",
                        franchiseLogo: "https://imgs.albamon.kr/images/franchise_booth/47/MBrandMain_Logo_1.gif",
                        keywordCode: "2060016",
                        keywordName: "",
                        partCode: "2060",
                        partName: "",
                    },
                ],
            };
        },
    },
};
