---
marp: true
theme: uncover
paginate: true
title: Server-Driven UI (SDUI)
---

# Server-Driven UI (SDUI)

서버가 주도하는 사용자 인터페이스

---

# 목차

1. SDUI 소개
2. SDUI 아키텍처
3. 구현 방안
4. 장단점 분석
   - 장점
   - 단점
5. 실제 적용 사례
6. 향후 발전 방향

---

# SDUI란?

- UI 구성과 로직을 서버에서 정의하고 제어하는 아키텍처
- 클라이언트는 서버에서 전달받은 UI 명세를 해석하고 렌더링
- JSON 또는 다른 형식의 데이터로 UI 구조를 정의

```json
{
  "type": "container",
  "children": [
    {
      "type": "text",
      "content": "안녕하세요"
    }
  ]
}
```

---

# 사용 사례

### 1. Airbnb

- 동적 검색 필터
- 지역별 맞춤 UI

### 2. Spotify

- 개인화된 홈 화면
- 다양한 레이아웃 실험

### 3. Instagram

- 피드 레이아웃 변경
- 프로모션 UI 동적 변경

---

# SDUI의 필요성

### 1. 빠른 업데이트

- 앱 스토어 배포 없이 UI 변경 가능
- A/B 테스트 용이

### 2. 일관성 유지

- 템플릿을 통해 여러 페이지에서 동일한 UI 경험
- 중앙 집중식 UI 관리

---

# 기본 구조

### 1. UI 컴포넌트 추상화

```typescript
interface UIComponent {
  type: string;
  props: Record<string, any>;
  children?: UIComponent[];
}
```

### 2. 렌더러 구현

```typescript
const ComponentRegistry = {
  button: Button,
  text: Text,
  container: Container,
};

function render(spec: UIComponent) {
  const Component = ComponentRegistry[spec.type];
  return <Component {...spec.props} />;
}
```

---

# 프로젝트 적용 방안

### 1. 홈 화면

- 캐러셀 데이터를 백엔드에서 가져옴
- 개인화 버튼 및 UI
  - 추석 기간에만 추가되는 배너
  - 생일인 유저에게 생일 축하 메시지 추가
  - 면접일에 면접 응원 메시지 추가

### 2. 이벤트 화면

- 미리 정해둔 템플릿으로 빠르게 배포 가능

---

# 트레이드오프

### 단점

1. 초기 개발 비용 증가

   - 컴포넌트 추상화 작업 필요
   - 렌더러 구현 필요

2. 복잡성 증가

   - 디버깅이 어려울 수 있음
   - 타입 안정성 확보 어려움

3. 네트워크 의존성
   - 오프라인 지원 어려움
   - 초기 로딩 시간 증가 가능성

---

# 그럼에도... 우리가 이것을 적용했을 때 이점

### 1. 비즈니스 민첩성

- 빠른 UI 변경 및 실험
- 즉각적인 피드백 반영

### 2. 개발 효율성

- 코드 중복 감소
- 플랫폼 간 일관성 유지 용이

### 3. 사용자 경험

- 개인화 경험 제공
- 동적 기능 제공 용이

---

# SDUI를 효과적으로 적용하기 위한 구체적 방안

### 가정

- 템플릿은 공통 부분을 추출한다
- 두번 다시 안 쓰이는 기능에 대해서는 의미없는 공수가 될 수 있기 때문에 배제한다.
  - uuid 를 삽입해서 이벤트 공유한 사람을 특정하는 방식

### 1. 개발자가 템플릿을 작성하고 기획과 마케터가 템플릿을 기반으로 의뢰서를 발행

### 2. 기획과 마케터가 구조를 먼저 가지고 오면 개발자가 템플릿화를 해준다

예시 - 정규화 되어있는 파일 : `2024tvcevent`

### 3. 미리 작성된 컴포넌트를 바탕으로 프롬프트를 사용하여 템플릿 작성을 진행한다

프롬프트 예시

```
다음과 같은 요구사항에 맞추어 템플릿을 작성해줘.

1. 개발자 요구 사항
- 기술 스택 : Typescript, Graphql, Apollo Server
- 반드시 미리 작성된 컴포넌트를 기반으로 한다.
- 작성된 컴포넌트 이외에는 사용하지 않는다.

2. 마케팅 요구 사항
- 클릭 이벤트에 대해서 GA 이벤트를 추가한다.
- 페이지 이동에 대한 GA 이벤트를 추가한다.
```

### 4. 작성된 프롬프트를 복붙한다.

Card Component Template (개발자가 필요한 데이터를 작성)

```js
 {
    franchiseCode: 46,
    franchiseName: "던킨",
    franchiseLogo:
      "https://imgs.albamon.kr/images/franchise_booth/46/MBrandMain_Logo.gif",
    keywordCode: "1080001",
    keywordName: "",
    partCode: "1080",
    partName: "",
  },
```

```ts
export const cardCollection = [
  {
    franchiseCode: 46,
    franchiseName: "던킨",
    franchiseLogo:
      "https://imgs.albamon.kr/images/franchise_booth/46/MBrandMain_Logo.gif",
    keywordCode: "1080001",
    keywordName: "",
    partCode: "1080",
    partName: "",
  },
  {
    franchiseCode: 47,
    franchiseName: "CJ 올리브영",
    franchiseLogo:
      "https://imgs.albamon.kr/images/franchise_booth/47/MBrandMain_Logo_1.gif",
    keywordCode: "2060016",
    keywordName: "",
    partCode: "2060",
    partName: "",
  },
  ...
  ,
  {
    franchiseCode: 70,
    franchiseName: "KFC",
    franchiseLogo:
      "https://imgs.albamon.kr/images/franchise_booth/70/MBrandMain_Logo_1.gif",
    keywordCode: "1040009",
    keywordName: "",
    partCode: "1040",
    partName: "",
  },
];
```

---

# 결론

SDUI는 웹과 앱 개발에서

- 빠른 변화 대응
- 향상된 사용자 경험
- 효율적인 비즈니스 관리

---

# 향후 과제

- AI 어시스턴트를 활용한 페이지 작성
  - 마케터 + 개발자가 함꼐 프롬프트 작성하여 빠르게 페이지를 완성

---

# Q&A

궁금하신 점이 있으신가요?
