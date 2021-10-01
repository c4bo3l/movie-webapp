import { fireEvent, render, screen } from '@testing-library/react';
import { Movie } from './Movie';
import { movieModel } from '../../models';
import { Router } from 'react-router-dom';
import { DETAIL_LINK } from '../../shared';
import { createMemoryHistory } from 'history';

test('renders Movie', () => {
  const movie: movieModel = {
    Title: 'Movie Title',
    Year: 2000,
    imdbID: 't112343',
    Poster: 'http://poster.co'
  };
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <Movie {...movie} />
    </Router>
  );
  const titleText = screen.getByText(movie.Title!);
  expect(titleText).toBeInTheDocument();

  const yearText = screen.getByText(movie.Year!);
  expect(yearText).toBeInTheDocument();

  const img = screen.getByAltText(`img-${movie.Title}`);
  expect(img).toHaveAttribute('src', movie.Poster);

  // open the detail page
  fireEvent.click(img);
  expect(history.location.pathname).toEqual(`${DETAIL_LINK}/${movie.imdbID}`);
});
