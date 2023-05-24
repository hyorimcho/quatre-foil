[![Netlify Status](https://api.netlify.com/api/v1/badges/df7898b5-e0f9-409e-a7d0-f230862fe8f5/deploy-status)](https://app.netlify.com/sites/quatre-foil/deploys)

# 💡 라이프 스타일 편집샵 quatre-foil 입니다.

[배포 주소](https://quatre-foil.netlify.app/)

### 개발 기간

2023.01.15 - 2023.05.19

## 구현 기능

구매 페이지

- Suspense를 활용한 비동기 처리
- 구매 위치(개별 상품, 장바구니)에 따른 조건부 렌더링
- 카카오 오픈 API를 활용한 주소 찾기

마이페이지

- Suspense를 활용한 비동기 처리
- react-router-dom의 outlet을 사용하여 레이아웃 구성

1. 계좌 추가 페이지
   - styled-component를 이용한 동적 스타일링
   - react-hook-form을 사용하여 비제어 양식을 만들어 관리
   - 계좌 추가 시 은행 선택하여 정보를 입력하는 모달 구현
2. 구매 목록 페이지
   - react-query의 useMutation 함수를 사용하여 주문을 취소, 확정
   - react-query의 select 옵션을 통한 필터링
   - useSearchParam로 새로고침에도 정보를 유지
   - errorElement를 활용하여 에러 처리
3. 정보 변경 페이지
   - react-hook-form과 yup을 사용해 유효성 검사

## 기술 스택

react, typescript, redux-toolkit, react-query, react-hook-form, yup, styled-components, vite

## 회고

- keep
  1. 처음 과제할 때 너무 어려웠던 기억에 이번 프로젝트 잘 할 수 있을지 처음에는 걱정도 됐다. 하지만 똑같은 api를 사용하는데 이번에는 '할 만 한데?!' 하는 생각이 들었다. 계속 열심히 공부하기.
  2. 프로젝트 설정부터 배포까지의 한 싸이클을 또 완료해 봤다. 사이트 색은 뭘로 할지 어떤 기술 스택을 사용할지 아무것도 없는 0에서 마음대로(~~어느정도..마음대로..~~) 이렇게 뚝딱뚝딱 만들어 뭔가 완성된다는 게 여전히 신기하고 재밌다.
  3. 요즘은 많은 사람들이 어쩌면 데스크탑, 랩탑보다 모바일으로 웹서핑하는 시간이 더 길지도 모르겠다. 특히 쇼핑몰의 경우에는! 작은 화면에서 큰 화면으로 구현하는 것이 쉽다고 하여, 모바일 화면일 때부터를 먼저 생각하여 개발했다. 앞으로도 어떤 서비스이냐에 따라 mobile first design을 하면 좋을 것 같았다.
- problem
  1. 만들어져 있는 api를 사용하기만 되어서 어떤 기능을 구현할지는 거의 다 나와있었다. 하지만 '만들다 보니 부족해서', '만들다 보니 필요할 것 같아서' 추가한 기능도 있다. 그렇게 덧붙이다 보니 데이터를 새로 받아 가공해야 할 경우도 있었고, 아예 처음부터 새로 손을 봐야 할 때도 있었다. 처음부터 잘 생각했더라면 하는 아쉬움이 남는다.
  2. 잘 작동할 때만 생각했기에 신나게 개발했는데, 갖가지 데이터를 마주하자 에러도 가지각색으로 마주할 수 있었다. 처리도 다 다르게 해주어야 해서 너무도 비효율적이었다. [다룬 글](https://velog.io/@hyorimm/react-router-dom%EC%9D%98-errorElement%EB%A1%9C-%EC%97%90%EB%9F%AC-%ED%95%B8%EB%93%A4%EB%A7%81%ED%95%98%EA%B8%B0). 이 외에도 많은 에러를 만났고 고민을 했으나 제대로 글을 다 못남긴 것이 아쉽다.
  3. 애초에 프로젝트 기간은 한 달로 정했지만 이런저런 변명이 더해져 기간이 엄청나게 길어졌다.
- try
  1. 기획의 100% 근처까지 가보려고 노력하기.
  2. 이번 쇼핑몰을 예로 든다면, 주문 목록이 없다거나, 계좌 목록이 없을 때 어떻게 화면에 나타낼지 먼저 생각해 보기. 분기 처리를 잘 한 코드를 쓰기. 그리고 글로 남기기.
  3. 설정한 프로젝트 배포 날을 꼭 맞출 수 있도록 일정 관리를 잘 해보기.

## 팀원

<table border> <tbody> <tr> <td align="center" width=""> <img width="200" src="https://avatars.githubusercontent.com/u/83855636?v=4"  alt="유지석"/><br /> <br/> <a href="https://github.com/yujiseok"> <img src="https://img.shields.io/badge/유지석-000?style=flat-round&logo=GitHub&logoColor=white"/> </a> </td> <td align="center" width=""> <img width="200" src="https://avatars.githubusercontent.com/u/103406196?v=4"  alt="조효림"/><br/> <br/> <a href="https://github.com/hyorimcho"> <img src="https://img.shields.io/badge/조효림-000?style=flat-round&logo=GitHub&logoColor=white"/> </a> </td> </tr> </tbody> </table>
