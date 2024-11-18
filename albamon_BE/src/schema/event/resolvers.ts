export const eventResolvers = {
  Query: {
    getEventPageComponents: async (
      _: any,
      { eventId }: { eventId: string }
    ) => {
      return {
        resultCode: "SUCCESS",
        resultMessage: "성공",
        components: [
          {
            type: "TITLE",
            text: "알바몬 출석체크 이벤트",
            fontSize: 24,
            fontWeight: "bold",
            textAlign: "center",
            color: "#000000",
          },
          {
            type: "ImageWithButtonComponent",
            text: "알바몬 출석체크 이벤트",
            fontSize: 24,
            fontWeight: "bold",
            textAlign: "center",
            color: "#000000",
            children: [
              {
                type: "BUTTON",
                onClick: "handleButtonClick",
              },
              {
                type: "IMAGE",
                imageUrl: "https://picsum.photos/200/300",
              },
            ],
          },
          {
            type: "IMAGE",
            imageUrl: "https://picsum.photos/200/300",
            backgroundColor: "#F5F5F5",
            paddingTop: 16,
            paddingBottom: 16,
            paddingLeft: 20,
            paddingRight: 20,
          },
          {
            type: "FLOATING_BUTTON",
            text: "이벤트 참여하기",
            backgroundColor: "#FF0000",
            textColor: "#FFFFFF",
            position: "fixed",
            bottom: 20,
          },
        ],
      };
    },
  },
  Component: {
    __resolveType(obj: any) {
      if (obj.type === "TITLE") return "TitleComponent";
      if (obj.type === "IMAGE") return "ImageComponent";
      if (obj.type === "FLOATING_BUTTON") return "FloatingButtonComponent";
      if (obj.type === "IMAGE_WITH_BUTTON") return "ImageWithButtonComponent";
      if (obj.type === "BUTTON") return "ButtonComponent";
      return null;
    },
  },
};
