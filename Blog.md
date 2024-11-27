
## 기존 개발 프로세스의 불편함
1) 비슷한 로직이지만 매 번 새로운 이벤트 페이지 생성
   -> 매 번 이전과 로직이 동일한 새로운 컴포넌트 생성
   -> 이벤트를 정규화 하여 프로세스를 단축시키고자 하는 수요 발생

2) 문구 변경이나 간단한 디자인 변경 등 단순한 수정에도 배포 진행
   -> 간단한 변경사항에는 배포 공수를 줄이고자 하는 수요 발생

SD-UI를 통하여 유연한 UI 제공

## 설계

<img width="684" alt="스크린샷 2024-11-27 오전 10 43 56" src="https://github.com/user-attachments/assets/1b7d5ed2-212f-409f-931f-8e415e319175">

## 서버에서 UI 다루기

위의 요구사항을 반영하여, 서버에서 제공하는 API를 이용해 동적으로 클라이언트의 UI를 구성하면 어떨까? 서버가 API 응답에 UI 정보를 담아 클라이언트에 제공하고, 클라이언트가 API 응답에 따라 화면을 렌더링한다면 서버에서 API 응답을 변경하는 것만으로 클라이언트의 화면 구성을 동적으로 변경할 수 있을 것이다.

다음 쿼리를 활용한 API는 홈 화면을 구성하는 UI 요소 리스트를 JSON 포맷으로 응답한다.
따라서 클라이언트는 응답의 data 리스트를 순회하며 각각의 type에 해당하는 UI 요소를 화면에 그려주면 된다.

```
export const GET_EVENT_LIST = gql`
  query GetEventPageComponents($eventId: ID!) {
    getEventPageComponents(eventId: $eventId) {
      resultCode
      resultMessage
      components
    }
  }
`;
```

```
   return {
        resultCode: "SUCCESS",
        resultMessage: "성공",
        eventId: eventId,
        components: [
          {
            type: "TITLE",
            text: "잡코리아x알바몬이 쏜다! 캠퍼스 어택",
            fontSize: 16,
            fontWeight: "700",
            color: "#000000",
          },
          {
            type: "FLOATING_BUTTON",
            text: "이벤트 참여하기",
            backgroundColor: "#ff7e1d",
            textColor: "#ffffff",
            width: "80%",
            height: 47,
            fontSize: 16,
            fontWeight: "700",
            bottom: 20,
            onClick: "handleFloatingButtonClick",
          },
          {
            type: "IMAGE",
            width: "100%",
            backgroundColor: "#ff7e1d",
            imageUrl: "https://img.albamon.kr/banner//2024/10/esrgoo28135334.png?v=1732498088001",
          },
          ]
     }
```


<img width="443" alt="스크린샷 2024-11-27 오전 7 08 49" src="https://github.com/user-attachments/assets/019f1742-9ce0-4c8e-8cf2-7a0df1a101e7">

## 재사용 가능한 UI 컴포넌트
서버에서 UI를 관리하면 유연성을 확보할 수 있지만, 사용하는 UI 요소의 재사용성을 고려하지 않으면 다양한 화면에서 UI 요소를 교체하기 어려워진다. 이러한 문제를 피하려면 모든 UI 요소를 재사용 가능한 컴포넌트로 구성하고, UI 컴포넌트를 다양한 화면에서 조립해서 사용할 수 있도록 만들어야 한다.

또한 수시로 화면에 새로운 컴포넌트가 추가되고 제거되면 서버와 클라이언트 사이의 타입 정의에 불일치가 발생하기 쉽다. 이때 GraphQL을 사용하면 서버와 클라이언트가 공유하는 스키마를 통해 API의 타입 안전성을 보장할 수 있다.



### 1) 쿼리 설계와 스키마
```
  query GetEventPageComponents($eventId: ID!) {
    getEventPageComponents(eventId: $eventId) {
      resultCode
      resultMessage
      components
    }
```

![업로드중..](blob:https://velog.io/1b5cf72f-0458-4430-8bd8-ddcb38da9fa6)



### 2) 요청과 응답

요청을 받은 서버는 홈 화면에서 사용할 컴포넌트를 골라서 반환

```
   return {
        resultCode: "SUCCESS",
        resultMessage: "성공",
        eventId: eventId,
        components: [
          {
            type: "TITLE",
            text: "잡코리아x알바몬이 쏜다! 캠퍼스 어택",
            fontSize: 16,
            fontWeight: "700",
            color: "#000000",
          },
          {
            type: "FLOATING_BUTTON",
            text: "이벤트 참여하기",
            backgroundColor: "#ff7e1d",
            textColor: "#ffffff",
            width: "80%",
            height: 47,
            fontSize: 16,
            fontWeight: "700",
            bottom: 20,
            onClick: "handleFloatingButtonClick",
          },
          {
            type: "IMAGE",
            width: "100%",
            backgroundColor: "#ff7e1d",
            imageUrl: "https://img.albamon.kr/banner//2024/10/esrgoo28135334.png?v=1732498088001",
          },
          ]
     }
```

### 3) 컴포넌트 조립

```
  <DefaultLayout>
        {eventList.getEventPageComponents.components.map((item, index) => (
          <RenderComponent key={`${item.type}_${index}`} {...item} />
        ))}
  </DefaultLayout>
```

```
const MAPPED_COMPONENTS = {
  TITLE: Title,
  IMAGE_WITH_CHILDREN: ImageWithChildren,
  GROUP: Group,
  IMAGE: Image,
  BUTTON: Button,
  // SPLIT: Split,
  CAROUSEL: Carousel,
  FLOATING_BUTTON: FloatingButton,
  FOOTER: Footer,
  LIST: List,
};

const RenderComponent = (data) => {
  if (!data?.type) return null;

  const Component = MAPPED_COMPONENTS[data.type];
  if (!Component) return null;

  return (
    <Component
      {...data}
      onClick={() => {
        EVENT_BUTTONS.includes(data.type) &&
          handleButtonEvent(data.type, { name: 'roum' });
      }}
    >
      {data.children?.map((child, index) => (
        <RenderComponent key={`${child.type}_${index}`} {...child} />
      ))}
    </Component>
  );
};
```


## 적용 후기 및 한계점

서버에서 진행하기 때문에 아주 복잡한 컴포넌트나 혹은 복잡한 로직의 함수의 경우 결국 프론트에서 조작이 필요하다는 한계점이 있었다.


## 향후계획
- Admin 페이지를 생성하여 작업하면, 중간 개발자의 공수 없이도 유연하게 UI를 조작해 볼 수 있을 것 같다.
- 템플릿화 과정에서 기획/디자인팀과 긴밀하게 협업하여 이벤트 페이지를 정규화
