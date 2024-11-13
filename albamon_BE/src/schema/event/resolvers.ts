export const eventResolvers = {
  Query: {
    getEvents: async (
      _: any,
      { status }: { status?: "UPCOMING" | "ONGOING" | "ENDED" }
    ) => {
      const events = [
        {
          eventId: "1",
          title: "알바몬 출석체크 이벤트",
          description: "매일 출석하고 포인트 받자!",
          thumbnailUrl: "https://picsum.photos/200/300",
          startDate: "2024-03-01",
          endDate: "2024-03-31",
          status: "ONGOING",
          participants: 1500,
          isParticipating: false,
          reward: "알바몬 포인트 1,000,000P",
        },
        {
          eventId: "2",
          title: "새해 복많이 받으세요",
          description: "새해 맞이 특별 이벤트",
          thumbnailUrl: "https://picsum.photos/200/300",
          startDate: "2024-01-01",
          endDate: "2024-01-31",
          status: "ENDED",
          participants: 3000,
          isParticipating: true,
          reward: "문화상품권 5,000,000원",
        },
      ];

      const filteredEvents = status
        ? events.filter((event) => event.status === status)
        : events;

      return {
        resultCode: "SUCCESS",
        resultMessage: "성공",
        totalCount: filteredEvents.length,
        events: filteredEvents,
      };
    },
    getEvent: async (_: any, { eventId }: { eventId: string }) => {
      const dummyEvents = [
        {
          eventId: "1",
          title: "알바몬 출석체크 이벤트",
          description: "매일 출석하고 포인트 받자!",
          thumbnailUrl: "https://picsum.photos/200/300",
          startDate: "2024-03-01",
          endDate: "2024-03-31",
          status: "ONGOING",
          participants: 1500,
          isParticipating: false,
          reward: "알바몬 포인트 1,000,000P",
        },
        {
          eventId: "2",
          title: "새해 복많이 받으세요",
          description: "새해 맞이 특별 이벤트",
          thumbnailUrl: "https://picsum.photos/200/300",
          startDate: "2024-01-01",
          endDate: "2024-01-31",
          status: "ENDED",
          participants: 3000,
          isParticipating: true,
          reward: "문화상품권 5,000,000원",
        },
      ];

      const event = dummyEvents.find((event) => event.eventId === eventId);

      if (!event) {
        return {
          resultCode: "NOT_FOUND",
          resultMessage: "이벤트를 찾을 수 없습니다.",
          event: null,
        };
      }

      return {
        resultCode: "SUCCESS",
        resultMessage: "성공",
        event,
      };
    },
  },
  Mutation: {
    participateEvent: async (_: any, { eventId }: { eventId: string }) => {
      return {
        resultCode: "SUCCESS",
        resultMessage: "만드는 중",
      };
    },
    cancelEventParticipation: async (
      _: any,
      { eventId }: { eventId: string }
    ) => {
      return {
        resultCode: "SUCCESS",
        resultMessage: "만드는 중",
      };
    },
  },
};
