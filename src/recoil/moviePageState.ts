import { atom } from "recoil";

const moviePageStateKey = 'movie-page-state';

export type moviePageStateType = {
  search?: string
};

export const moviePageState = atom<moviePageStateType>({
  key: moviePageStateKey,
  default: {
    search: undefined
  }
});