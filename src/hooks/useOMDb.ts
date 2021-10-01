import axios from 'axios';
import { movieDetailModel, movieModel } from '../models';
import { BASE_API_URL } from '../shared';

type movieAPIResult = {
  Search?: movieModel[];
  totalResults?: number;
  Response: boolean;
  Error?: string;
};

export const useOMDb = () => {
  const fetchMovies = async (search: string, page?: number) => {
    const response = await axios.get<movieAPIResult>(`${BASE_API_URL}&type=movie&s=${search}&page=${page || 1}`);
    return response.data;
  };

  const fetchMovieDetail = async (imdbId: string) => {
    const response = await axios.get<movieDetailModel>(`${BASE_API_URL}&type=movie&i=${imdbId}`);
    return response.data;
  }

  return {
    fetchMovies,
    fetchMovieDetail
  };
};