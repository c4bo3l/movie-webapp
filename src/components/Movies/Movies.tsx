/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Alert, Col, Container, FormControl, InputGroup, Row } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";
import InfiniteScroll from "react-infinite-scroll-component";
import { Movie, MovieContainer } from "..";
import { useMoviePageState, useOMDb } from "../../hooks";
import { movieModel } from "../../models";

export const Movies = () => {
  const { fetchMovies } = useOMDb();
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState<movieModel[]>([]);
  const [mainPageState, setMainPageState] = useMoviePageState();
  const [error, setError] = useState<string | undefined>(undefined);
  const [hasMoreData, setHasMoreData] = useState(false);

  const onSearchChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    window.scrollTo(0, 0);
    setMovies([]);
    setPage(1);
    setMainPageState({
      search: event.currentTarget.value
    });
  };

  const fetch = () => {
    setError(undefined);

    if (!!!mainPageState.search) {
      setMovies([]);
      return;
    }

    fetchMovies(mainPageState.search, page)
      .then((result) => {
        setError(page !== 1 ? undefined : result.Error);
        setHasMoreData(result.Response);
        if (!!result.Search) {
          setMovies([
            ...movies,
            ...result.Search
          ]);
        }
      });
  };

  const fetchNext = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    fetch();
  }, [page, mainPageState.search]);

  return (
    <Container fluid>
      <Row className='mt-2' style={{
        position: 'sticky',
        top: '56px',
        zIndex: 100
      }}>
        <Col>
          <InputGroup>
            <InputGroup.Text id="txt-search-prefix">
              <Search />
            </InputGroup.Text>
            <FormControl
              placeholder="Search by movie title"
              aria-label="Search by movie title"
              aria-describedby="txt-search-prefix"
              onChange={onSearchChanged}
              value={mainPageState.search || ''}
            />
          </InputGroup>
        </Col>
      </Row>
      <InfiniteScroll
        dataLength={movies.length}
        next={fetchNext}
        hasMore={hasMoreData}
        loader={
          <div style={{ display: 'hidden' }} />
        }
        style={{
          overflowX: 'hidden'
        }}
      >
        {
          !!error &&
          <Row className='mt-2'>
            <Col>
              <Alert variant='danger'>
                {error}
              </Alert>
            </Col>
          </Row>
        }
        <Row className='mt-1'>
          {
            movies.map((movie, index) => {
              return (
                <MovieContainer
                  key={`${movie.imdbID}-${index}`}
                  className='mt-2 mb-2'
                >
                  <Movie
                    {...movie}
                  />
                </MovieContainer>
              );
            })
          }
        </Row>
      </InfiniteScroll>
    </Container>
  );
};