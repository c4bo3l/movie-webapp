import { useRecoilState } from "recoil";
import { moviePageState, moviePageStateType } from '../recoil';

export const useMoviePageState = (): [moviePageStateType, (value: moviePageStateType) => void] => {
  const [pageState, setPageState] = useRecoilState(moviePageState);
  return [pageState, setPageState];
};