# MovieApp(React Native)

## TMDB의 movie open restAPI를 사용한 영화 소개 APP

리액트 네이티브를 공부하며 두번째로 만들어본 앱입니다.

2020.12.11 ~ 2020.12.20 1인 작업

> ## 사용 기술

1. `redux` : 상태관리는 redux를 사용했습니다. 각 페이지 컴포넌트에 `useSelector`와 `useDispatch`를 사용해서 액션 함수와 데이터를 편리하게 다룰 수 있었습니다.

2. `axios` : restAPI 호출을 위해 axios 라이브러리를 사용했습니다. `axios.creat({})`를 사용해서 baseURL과 params(api_key,language)를 지정해주었고 get 메서드로 데이터를 조회하였습니다. util 폴더에서 각 페이지에 필요한 데이터를 셋팅해두었습니다.

3. `styled-components` : style은 개인적으로 StyleSheet 보다 가독성이 좋아보여서 styled-components를 사용했습니다.
   스타일 컴포넌트에서 사용하는 ES6의 Template literals 문자열 표기법을 숙지하게 되었습니다.

4. `react-native-navigation` : 네비게이션 라이브러리를 이용하여 `Tab navigation`과 `stack navigation` 의 개념을 파악하고 페이지를 편리하게 나눌 수 있었습니다. Tab.navigator 안에 Stack 컴포넌트를 넣는 것과 Stack.navigator 안에 Tab 컴포넌트를 넣는 것에 차이가 있다는 것을 배웠습니다. 이 앱에서는 Stack.navigator 안에 Tab 컴포넌트를 넣음으로써 Stack 페이지에서 TabBar가 보이지 않습니다.(ex. Detail Page로 이동하면 BottomTabBar가 보이지 않습니다.)

5. `react-native-vector-icons` : 아이콘은 기존에 디자이너 경험이 있어서 직접 그려서 사용하려다 빠른 시간 활용을 위해 라이브러리를 알아보았고 react-native-vector-icons 라는 라이브러리로 작업하였습니다.

6. `AsyncStorage` : Detail Page에 있는 하트를 눌렀을 때 `AsyncStorage`의 `setItem`을 이용해서 키를 저장해주었습니다. 문자열로 저장해주기 위해 `JSON.stringify`를 사용하였으며 Like Page에서 데이터를 가져올 때에는 `getAllKeys`로 모든 키를 배열에 넣어주었습니다. `for...of문`을 이용해서 배열 안에 있는 키를 순회하여 `getItem`으로 전부 가져왔고 가져온 데이터는 다시 `JSON.parse`를 이용해서 문자열에서 객체형태로 변환하였습니다. 그렇게 가져온 데이터는 redux의 액션 함수를 이용해서 initialState에 담았고 useSelector로 가져온 데이터를 이용해 map함수를 써서 화면에 좋아요 한 영화를 그려줄 수 있었습니다. 하트 아이콘을 한번 더 클릭하면 `removeItem`이, 반대로 다시 누르면 `setItem`이 실행 되게 해서 토글 기능까지 갖추었습니다.

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

![MovieApp_design2](https://user-images.githubusercontent.com/71235165/102698052-07da6d80-427e-11eb-9173-88752d2586d5.PNG)

---

## **Main page**

![MovieApp_mainpage](https://user-images.githubusercontent.com/71235165/102715759-e9767f80-431a-11eb-9a1f-3c5280c6d343.jpg)
![mainpage_1](https://user-images.githubusercontent.com/71235165/102716526-c9958a80-431f-11eb-9471-9d79fd53ca79.gif)

## **List page**

![MovieApp_listpage](https://user-images.githubusercontent.com/71235165/102715809-1b87e180-431b-11eb-823e-e2df788b71fd.jpg)
![listpage_1](https://user-images.githubusercontent.com/71235165/102716638-85ef5080-4320-11eb-818a-1828bf42c536.gif)

## **Search page**

![MovieApp_searchpage](https://user-images.githubusercontent.com/71235165/102715838-5be75f80-431b-11eb-9963-5a76f088a958.jpg)
![searchpage_1](https://user-images.githubusercontent.com/71235165/102716749-25acde80-4321-11eb-9b44-39532eac45f4.gif)

## **Like page**

![MovieApp_likepage](https://user-images.githubusercontent.com/71235165/102715871-7b7e8800-431b-11eb-9d35-3e638b5b8677.jpg)
![likepage_1](https://user-images.githubusercontent.com/71235165/102716881-ed59d000-4321-11eb-8e30-d1c97b99257c.gif)

## **List Detail page**

### useEffect에 넣은 조건문에 따라 params로 넘어온 장르 데이터가 있을 경우 해당 장르 영화 리스트가 보이고 그렇지 않을 경우 인기영화나 상영중인 영화의 리스트가 보입니다.

(영화 카드를 누르면 detail page로 이동 가능합니다.)

1. main page의 인기영화 더보기 버튼을 누르거나 list page에서 더보기 버튼을 누를 경우 나타나는 페이지 입니다.

![MovieApp_listdetailpage1](https://user-images.githubusercontent.com/71235165/102716079-d4025500-431c-11eb-80d3-2af7e25e6b1e.jpg)
![listdetailpage_1](https://user-images.githubusercontent.com/71235165/102717047-1cbd0c80-4323-11eb-9932-913cd239113f.gif)

2. main page에서 #액션/판타지 등 장르 버튼을 누른 경우 나타납니다.

![MovieApp_listdetailpage2](https://user-images.githubusercontent.com/71235165/102716204-a538ae80-431d-11eb-9b6b-1e262db00a17.jpg)
![listdetailpage_2](https://user-images.githubusercontent.com/71235165/102717159-e0d67700-4323-11eb-8db5-13a5ce6ac9f4.gif)

## **Detail page**

![MovieApp_detailpage](https://user-images.githubusercontent.com/71235165/102717177-f8156480-4323-11eb-979e-e81087bc4b51.jpg)
![detailpage_1](https://user-images.githubusercontent.com/71235165/102717288-b2a56700-4324-11eb-8ace-43f76a1926b3.gif)
