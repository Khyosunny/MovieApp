//액션 타입
const LOADING = 'main/LOADING';
const GET_DATA = 'main/GET_DATA';

//액션 생성 함수
export const loadingStart = () => ({ type: LOADING });
export const getData = (popularData, nowPlayingData) => ({ type: GET_DATA, popularData, nowPlayingData});

//초기 스테이트
const initialState = {
  loading: false,
  popularMovieList: [],
  nowMovieList: []
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
        popularMovieList: action.popularData,
        nowMovieList: action.nowPlayingData
      }
    default:
      return state;
  }
}