# Apollo Server로 GraphQL 서버 구축하기: 경험과 인사이트

> 진주님 피드백 : 임펙트 있는 첫 요소가 있으면 좋겠다.
> 흑백요리사 사진?

안녕하세요! 오늘은 제가 최근에 경험한 Apollo Server 구축 과정과 그 과정에서 얻은 인사이트를 공유하고자 합니다.😀

## Apollo Server란?

Apollo Server는 GraphQL 스펙을 준수하는 오픈소스 서버 프레임워크입니다. 특히 TypeScript와의 뛰어난 호환성과 개발자 경험(DX)을 최우선으로 고려하여 설계되었습니다.

## Apollo Server vs GraphQL Yoga

처음에는 GraphQL Yoga도 고려했었는데요, 결국 Apollo Server를 선택하게 되었습니다.
그 이유는 아래와 같습니다.

1. 더 풍부한 커뮤니티와 레퍼런스

   - gihtub star 수

     - Apollo Server : 13.8k, Yoga : 8.3k (24년 11월 26일 당시)
       출처
       https://github.com/dotansimha/graphql-yoga
       https://github.com/apollographql/apollo-server

   - 다양한 기업의 실제 프로덕션 사례 (Netflix, Airbnb 등)
     출처
     https://deview.kr/data/deview/session/attach/GraphQL%E1%84%8B%E1%85%B5_%E1%84%80%E1%85%A1%E1%84%8C%E1%85%A7%E1%84%8B%E1%85%A9%E1%86%AB_%E1%84%8B%E1%85%A6%E1%84%8B%E1%85%A5%E1%84%87%E1%85%B5%E1%84%8B%E1%85%A2%E1%86%AB%E1%84%87%E1%85%B5_%E1%84%91%E1%85%B3%E1%84%85%E1%85%A9%E1%86%AB%E1%84%90%E1%85%B3%E1%84%8B%E1%85%A2%E1%86%AB%E1%84%83%E1%85%B3_%E1%84%80%E1%85%B5%E1%84%89%E1%85%AE%E1%86%AF%E1%84%8B%E1%85%B4_%E1%84%87%E1%85%A7%E1%86%AB%E1%84%8E%E1%85%A5%E1%86%AB%E1%84%89%E1%85%A1_1106.pdf

2. 프로덕션 환경을 고려하였을 때 다양한 요구사항에 대응 가능

   - 기능 확장성 : 플러그인 시스템을 통해 기능을 쉽게 확장할 수 있어, 복잡한 요구사항을 충족하는데 유리합니다.
     출처
     https://the-guild.dev/graphql/yoga-server/docs/comparison
     https://npm-compare.com/ko-KR/apollo-server-express,express-graphql,graphql-yoga
   - 분산 시스템 지원을 위한 Federation 아키텍처
     https://velog.io/@banjjoknim/Apollo-GraphQL-Federation

물론 GraphQL Yoga도 기본적인 기능을 제공하기에 문제없지만, 대규모 서비스 환경에서는 Apollo Server의 안정성과 확장성이 더 큰 장점이 있다는 것을 고려하여 Apollo Server를 선택했습니다.

## 설치 및 초기 설정

```bash
bash
npm install @apollo/server graphql
```

하지만 실제로 서버를 구축하면서 몇 가지 시행착오를 겪었는데요. 특히 TypeScript와 함께 사용할 때 타입 정의에 대한 부분이 까다로웠습니다.
이 부분은 추후 라이브러리를 통해 개선해볼 예정입니다.

## 배포 시의 도전과제

serverless가 아닌 무료 서버가 점점 없어지면서 Render를 배포 플랫폼으로 선택하였습니다.
Render 플랫폼에 배포하면서 가장 큰 문제는 Cold Start 현상이었습니다. 첫 요청 시 10초 이상 걸리는 문제가 발생했습니다. 시연을 하며 너무 느려서 곤란했는데, 시연 전에 첫 요청을 미리 해두시는 것을 추천드립니다.

## 사용 후기

Apollo Server를 사용하면서 느낀 가장 큰 장점은 개발자 경험이 정말 뛰어나다는 것입니다. GraphQL의 강력한 기능을 손쉽게 구현할 수 있고, 특히 TypeScript와의 통합이 매끄러워서 타입 안정성을 확보하기가 쉬웠습니다.
물론 처음에는 설정이 다소 복잡하고 학습 곡선이 있었지만, 한번 익숙해지고 나면 생산성이 크게 향상되는 것을 경험했습니다.
앞으로도 GraphQL 기반의 프로젝트를 진행한다면 Apollo Server는 최우선 고려 대상이 될 것 같습니다.
