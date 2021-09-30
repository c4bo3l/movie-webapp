import axios from 'axios';
import { movieDetailModel, movieModel } from '../models';

type movieAPIResult = {
  Search?: movieModel[];
  totalResults?: number;
  Response: boolean;
  Error?: string;
};

export const useOMDb = () => {
  const url = 'https://www.omdbapi.com/?apikey=b9bd48a6';
  const fetchMovies = async (search: string, page?: number) => {
    const response = await axios.get<movieAPIResult>(`${url}&type=movie&s=${search}&page=${page || 1}`);
    return response.data;
  };

  const fetchMovieDetail = async (imdbId: string) => {
    const response = await axios.get<movieDetailModel>(`${url}&type=movie&i=${imdbId}`);
    return response.data;
  }

  return {
    fetchMovies,
    fetchMovieDetail
  };
};