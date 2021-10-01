import { render, screen, waitFor } from '@testing-library/react';
import { MovieDetail } from './MovieDetail';
import { movieDetailModel } from '../../models';
import nock from 'nock';
import axios from 'axios';

const movieDetail: movieDetailModel = {
  Title: 'Movie Title',
  Year: 2000,
  imdbID: 't112343',
  Poster: 'http://poster.co',
  Rated: 'rated',
  Released: 'released',
  Runtime: 'runtime',
  Genre: 'genre',
  Director: 'director',
  Writer: 'writer',
  Actors: 'actor 1',
  Plot: 'plot 123',
  Language: 'english',
  Country: 'country',
  Awards: 'awards',
  Ratings: [
    {
      Source: 'source 1',
      Value: 'value 1'
    },
    {
      Source: 'source 2',
      Value: 'value 2'
    }
  ],
  Metascore: 'metascore',
  imdbRating: 'imdb rating',
  imdbVotes: 'imdb votes',
  Type: 'type',
  DVD: 'dvd',
  BoxOffice: 'box office',
  Production: 'production',
  Website: 'http://we.site',
  Response: true
};

test('renders MovieDetail', async () => {
  window.scrollTo = jest.fn();
  nock(`https://www.omdbapi.com`)
    .get(`/?apikey=b9bd48a6&type=movie&i=${movieDetail.imdbID}`)
    .reply(200, movieDetail);

  axios.defaults.adapter = require('axios/lib/adapters/http');

  render(<MovieDetail imdbid={movieDetail.imdbID!} />);

  await waitFor(() => screen.getByText(`${movieDetail.Title} (${movieDetail.Year})`));
  
  const titleText = screen.getByText(`${movieDetail.Title} (${movieDetail.Year})`);
  expect(titleText).toBeInTheDocument();
});
