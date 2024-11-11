---
marp: true
theme: uncover
paginate: true
title: Server-Driven UI (SDUI)
---

# Server-Driven UI (SDUI)

서버가 주도하는 사용자 인터페이스

---
# 📦 SD-UI 장점 정리

SD-UI는 효율적이고 일관된 UI 구축을 위해 다양한 장점을 제공합니다. 주요 특징을 요약해보면 다음과 같습니다.

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

# 🌟 SD-UI의 필요성과 장점

SD-UI는 현대적인 앱 개발에서 **빠른 변화 대응**, **일관된 사용자 경험**, 그리고 **효율적인 리소스 관리**를 가능하게 하는 강력한 도구입니다. 이 README에서는 SD-UI의 필요성과 이를 활용한 구현 방법을 소개합니다.

---

## 🎨 SD-UI의 주요 장점

### 🧩 UI 패턴화
SD-UI는 **미리 정의된 UI 패턴**을 제공하여, 반복적인 작업을 줄이고 일관성 있는 디자인을 유지할 수 있습니다.
- ✔️ **재사용성**: 기본 컴포넌트를 재사용 가능하게 하여 개발 공수를 절감
- ✔️ **일관성**: 전체 UI에서 동일한 디자인 패턴을 유지하여 사용자 경험을 개선

---

#### 예시 코드:
```javascript
import React from 'react';

const Button = ({ label, onClick, type = 'primary' }) => {
    const styles = {
        primary: { backgroundColor: '#007BFF', color: '#FFF' },
        secondary: { backgroundColor: '#6C757D', color: '#FFF' },
    };
    return <button style={styles[type]} onClick={onClick}>{label}</button>;
};
export default Button;
```

---

## 🎨 테마 관리 및 스타일 적용
테마와 스타일을 미리 정의해 손쉽게 UI의 일관성을 유지하고, 브랜드 컬러와 스타일을 반영할 수 있습니다.

✔️ 테마를 통해 앱의 색상과 폰트를 전역에서 관리 가능
✔️ 특정 이벤트나 시즌에 맞춰 테마를 손쉽게 변경

### 예시 코드:
```javascript  
import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState({ primaryColor: '#007BFF' });

    const toggleTheme = () => setTheme({ primaryColor: theme.primaryColor === '#007BFF' ? '#28a745' : '#007BFF' });

    return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);
```

---

## 🚀 배포 프로세스 단축
SD-UI를 통해 배포 없이도 관리자 페이지에서 DB 값만으로 프론트엔드 일부를 수정할 수 있습니다.

✔️ 이벤트나 프로모션 콘텐츠를 실시간으로 업데이트 가능
✔️ 개발팀과 운영팀 모두 효율적으로 작업 가능

### 예시 코드:
```javascript
import React, { useEffect, useState } from 'react';

const EventBanner = () => {
  const [eventData, setEventData] = useState(null);

  useEffect(() => {
    fetch('/api/events/latest')
      .then((response) => response.json())
      .then((data) => setEventData(data));
  }, []);

  if (!eventData) return null;

  return (
    <div style={{ backgroundColor: '#F0F0F0', padding: '20px', textAlign: 'center' }}>
      <h2>{eventData.title}</h2>
      <p>{eventData.description}</p>
    </div>
  );
};
export default EventBanner;
```

---

# SD-UI의 필요성
1. ⏩ 빠른 업데이트
   앱 스토어 배포 없이 UI 변경 가능
   A/B 테스트 용이
2. 🔄 일관성 유지
   여러 플랫폼에서 동일한 UI 경험
   중앙 집중식 UI 관리
3. 📉 리소스 최적화
   필요한 UI 컴포넌트만 전달
   네트워크 사용량 최적화

---

# 🛠️ 프로젝트 적용 방안

### 1. UI 컴포넌트 추상화
SD-UI 적용을 위해 UI 컴포넌트를 추상화하여 관리합니다.

```typescript
interface UIComponent {
  type: string;
  props: Record<string, any>;
  children?: UIComponent[];
}
```

---

### 2. 렌더러 구현
렌더러를 구현하여 각 컴포넌트를 동적으로 렌더링합니다.
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

# 🌈 SDUI의 이점

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

# 💼 사용 사례

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

# 🔔 결론

SDUI는 현대적인 앱 개발에서

- 빠른 변화 대응
- 일관된 사용자 경험
- 효율적인 리소스 관리

를 가능하게 하는 강력한 도구입니다.

---

# ❓ Q&A

궁금하신 점이 있으신가요?
