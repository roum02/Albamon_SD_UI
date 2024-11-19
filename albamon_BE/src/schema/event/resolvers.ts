export const eventResolvers = {
  Query: {
    getEventPageComponents: async (
      _: any,
      { eventId }: { eventId: string }
    ) => {
      return {
        resultCode: "SUCCESS",
        resultMessage: "성공",
        eventId: eventId,
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
            type: "IMAGE_WITH_BUTTON",
            imageUrl: "https://picsum.photos/200/300",
            buttonText: "알바몬 출석체크 이벤트",
            buttonBackgroundColor: "#000000",
            buttonTextColor: "#FFFFFF",
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
          {
            type: "FOOTER",
            text: "알바몬 출석체크 이벤트",
            fontSize: 24,
            fontWeight: "bold",
            textAlign: "center",
            color: "#000000",
          },
        ],
      };
    },
  },
};
