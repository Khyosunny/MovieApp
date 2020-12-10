//액션 타입
const LOADING = 'main/LOADING';
const GET_DATA = 'main/GET_DATA';

//액션 생성 함수
export const loadingStart = () => ({ type: LOADING });
export const getData = data => ({ type: GET_DATA, data });

//초기 스테이트
const initialState = {
  loading: false,
  data: []
}

//리듀서
export default function main(state = initialState, action) {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true,
      }
    case GET_DATA:
      return {
        ...state,
        loading: false,
        data: action.data
      }
    default:
      return state;
  }
}