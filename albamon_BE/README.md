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

1. SDUI란?
2. SDUI의 필요성
3. 프로젝트 적용 방안
4. 트레이드오프
5. SDUI의 이점
6. 사용 사례

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

# SDUI의 필요성

### 1. 빠른 업데이트

- 앱 스토어 배포 없이 UI 변경 가능
- A/B 테스트 용이

### 2. 일관성 유지

- 여러 플랫폼에서 동일한 UI 경험
- 중앙 집중식 UI 관리

### 3. 리소스 최적화

- 필요한 UI 컴포넌트만 전달
- 네트워크 사용량 최적화

---

# 프로젝트 적용 방안

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

# SDUI의 이점

### 1. 비즈니스 민첩성

- 빠른 UI 변경 및 실험
- 즉각적인 피드백 반영

### 2. 개발 효율성

- 코드 중복 감소
- 플랫폼 간 일관성 유지 용이

### 3. 사용자 경험

- 일관된 UI/UX 제공
- 동적 기능 제공 용이

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

# 결론

SDUI는 현대적인 앱 개발에서

- 빠른 변화 대응
- 일관된 사용자 경험
- 효율적인 리소스 관리

를 가능하게 하는 강력한 도구입니다.

---

# Q&A

궁금하신 점이 있으신가요?
