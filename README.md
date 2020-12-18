# MovieApp(React Native)

-2020.12.19일 현재 진행 중-

## TMDB의 영화 restAPI를 사용한 영화 소개 앱 입니다.

> ## 사용 기술

- 상태관리는 redux를 사용했습니다. 각 페이지 컴포넌트에 useSelector와 useDispatch를 사용해서 액션 함수와 데이터를 편리하게 다룰 수 있었습니다.

- restAPI 호출을 위해 axios 라이브러리를 사용했습니다. axios.creat({})를 사용해서 baseURL과 params(api_key,language)를 지정해주었고 get 메서드로 데이터를 조회하였습니다. util 폴더에서 각 페이지에 필요한 데이터를 셋팅해두었습니다.

- style은 StyleSheet 보다 가독성이 좋은 styled-components를 사용했습니다.
  스타일 컴포넌트에서 사용하는 ES6의 Template literals 문자열 표기법을 숙지하게 되었습니다.

- react-native-navigation 라이브러리를 이용하여 Tab navigation과 stack navigation 의 개념을 파악하고 페이지를 편리하게 나눌 수 있었습니다. Tab.navigator 안에 Stack 컴포넌트를 넣는 것과 Stack.navigator 안에 Tab 컴포넌트를 넣는 것에 차이가 있다는 것을 배웠습니다. 이 앱에서는 Stack.navigator 안에 Tab 컴포넌트를 넣음으로써 Stack 페이지에서 TabBar가 보이지 않습니다.(ex. Detail Page로 이동하면 BottomTabBar가 보이지 않습니다.)

- 아이콘은 기존에 디자이너 경험이 있어서 직접 그려서 사용하려다 빠른 시간 활용을 위해 라이브러리를 알아보았고 react-native-vector-icons 라는 라이브러리로 작업하였습니다.

> ## 앱 페이지

- Tab navigation

  - Main page
  - List page
  - Search page
  - Like page

- Stack navigation
  - Detail page
  - List Detail page

---

Adobe XD로 작업한 디자인 이미지 입니다.

![MovieApp_design](https://user-images.githubusercontent.com/71235165/102632954-1ef06100-4193-11eb-936e-05686125038d.PNG)

플로우 차트

![MovieApp_design2](https://user-images.githubusercontent.com/71235165/102635284-73e1a680-4196-11eb-9840-35a6230ac084.PNG)

---
