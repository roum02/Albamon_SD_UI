import { cardCollection } from "@/data/cardData.js";

export const cardResolvers = {
  Query: {
    getCards: async () => {
      return {
        resultCode: "SUCCESS",
        resultMessage: "성공",
        totalCount: 80,
        row: 2,
        column: 4,
        collection: cardCollection,
      };
    },
  },
};
