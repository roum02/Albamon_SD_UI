# 알바몬 SDUI (Server-Driven UI) 프로젝트

## 소개

이 프로젝트는 알바몬의 Server-Driven UI (SDUI) PoC(Proof of Concept) 구현입니다. SDUI를 통해 서버에서 UI 구성을 제어하여 클라이언트 앱의 유연성과 유지보수성을 향상시키는 것을 목표로 합니다.

## 기술 스택

### 프론트엔드

- Next.js 12
- TypeScript
- Apollo Client
- SCSS
- React Query
- Swiper

### 백엔드

- Node.js
- TypeScript
- Apollo Server
- GraphQL

## 주요 기능

### 1. 동적 UI 렌더링

- 서버에서 정의된 UI 스펙에 따라 동적으로 컴포넌트 렌더링
- 이벤트 페이지, 메인 배너 등 다양한 UI 요소 지원

### 2. 이벤트 페이지 시스템

```73:99:albamon_FE/libs/templates/src/lib/Event/EventTemplate.tsx
export const EventTemplate = () => {
  const {
    data: eventList,
    loading,
    error,
  } = useQuery(GET_EVENT_LIST, {
    // TODO 임의 eventId
    variables: { eventId: '1' },
  });

  // console.log(eventList.getEventPageComponents.components);

  if (loading) return <p>loading...</p>;
  if (error) return <p>Error : {error?.message} </p>;

  return (
    <div className={cx(rootClass)}>
      <DefaultLayout>
        {eventList.getEventPageComponents.components.map((item, index) => (
          <RenderComponent key={`${item.type}_${index}`} {...item} />
        ))}
      </DefaultLayout>
      {/* Floating Button 마진*/}
      <div style={{ height: '100px' }} />
    </div>
  );
};
```

### 3. 프로모션 배너 관리

```3:38:albamon_BE/src/schema/banner/resolvers.ts
    getPromotionBanners: async () => {
      // 임시 더미 데이터
      return {
        promotionBannerCount: 5,
        promotionBanners: [
          {
            bannerNo: 32,
            bannerImageUrl:
              "https://test-imgs.albamon.kr/images/main/mobile/promotion/202408/pqrizt19094431.png",
            bannerTitle: "알바의 상식 테스트",
            alternateTitle: "알바의 상식 테스트",
            bannerLinkUrl: "https://m.albamon.com",
            appMenuNo: "",
            bannerBackGroundColor: "607FFF",
          },
          {
            bannerNo: 7,
            bannerImageUrl:
              "https://test-imgs.albamon.kr/images/main/mobile/promotion/202405/jljhur20165855.png",
            bannerTitle: "ABTI 테스트",
            alternateTitle: "ABTI 테스트",
            bannerLinkUrl: "https://mts3.albamon.com/alba-talk/abti",
            appMenuNo: "",
            bannerBackGroundColor: "FF501B",
          },
          {
            bannerNo: 33,
            bannerImageUrl:
              "https://test-imgs.albamon.kr/images/main/mobile/promotion/202408/lcjzlo20135733.jpg",
            bannerTitle: "보스몬 투표 테스트",
            alternateTitle: "보스몬 투표 테스트",
            bannerLinkUrl:
              "https://test-bossmon.albamon.com/bossmon/event/difficultVote",
            appMenuNo: "",
            bannerBackGroundColor: "46CDCF",
          },
```

### 4. 카드 컴포넌트 시스템

```1:16:albamon_BE/src/schema/card/resolvers.ts
import { cardCollection } from "../../data/cardData.js";

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
```

## 설치 및 실행

### 프론트엔드

```bash
cd albamon_FE
yarn install
yarn dev
```

### 백엔드

```bash
cd albamon_BE
yarn install
yarn dev
```

## 프로젝트 구조

```
albamon_SD_UI/
├── albamon_FE/          # 프론트엔드 프로젝트
│   ├── libs/            # 공통 컴포넌트 및 유틸리티
│   ├── pages/           # Next.js 페이지
│   └── styles/          # 전역 스타일
└── albamon_BE/          # 백엔드 프로젝트
    ├── src/
    │   ├── schema/      # GraphQL 스키마 정의
    │   └── data/        # 더미 데이터
    └── dist/            # 컴파일된 파일
```

## 주요 특징

1. **템플릿 기반 UI 관리**

   - 표준화된 템플릿을 통한 일관된 UI 제공
   - 마케팅/기획팀과의 효율적인 협업 지원

2. **실시간 UI 업데이트**

   - 앱 배포 없이 서버 측에서 UI 변경 가능
   - A/B 테스트 용이

## 향후 계획

1. 관리자 페이지 구현
2. AI 프롬프트를 활용한 템플릿 자동 생성
3. 실시간 데이터 동기화 개선
