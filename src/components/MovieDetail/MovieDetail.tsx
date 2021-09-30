/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Alert, Col, Container, Row, Spinner, Table } from "react-bootstrap";
import { useOMDb } from "../../hooks"
import { movieDetailModel } from "../../models";
import { NO_AVAILABLE_IMAGE_URL } from "../../shared";

interface MovieDetailProps {
  imdbid: string;
}

export const MovieDetail = (props: MovieDetailProps) => {
  const { fetchMovieDetail } = useOMDb();
  const [detail, setDetail] = useState<movieDetailModel | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);

  const fetch = () => {
    setIsLoading(true);
    fetchMovieDetail(props.imdbid)
      .then((result) => {
        setDetail({ ...result });
      }).catch((reason) => {
        console.error(reason);
      }).finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    fetch();
  }, []);

  const imgSrc = detail?.Poster?.toLowerCase() === 'n/a' ? NO_AVAILABLE_IMAGE_URL : detail?.Poster;
  const ratingRowSpan = !!detail?.Ratings ? detail.Ratings.length + 1 : 0;

  return (
    <Container fluid>
      {
        !!detail?.Error &&
        <Row className='mt-2'>
          <Col>
            <Alert variant='danger'>
              {detail.Error}
            </Alert>
          </Col>
        </Row>
      }
      {
        isLoading &&
        <Row className='mt-2'>
          <Col style={{
            display: 'flex',
            justifyContent: 'center'
          }}>
            <Spinner animation='grow' variant='primary' />
          </Col>
        </Row>
      }
      {
        !!!isLoading && !!!detail?.Error &&
        <>
          <Row className='mt-2'>
            <Col>
              <h3>
                {`${detail?.Title} (${detail?.Year})`}
              </h3>
            </Col>
          </Row>
          <Row>
            <Col
              style={{
                display: 'flex',
                justifyContent: 'center'
              }}
            >
              <img src={imgSrc} alt={detail?.Title} />
            </Col>
          </Row>
          <Row>
            <Col>
              <Table responsive>
                <tbody>
                  <tr>
                    <td>Rated</td>
                    <td colSpan={2}>{detail?.Rated}</td>
                  </tr>
                  <tr>
                    <td>Released</td>
                    <td colSpan={2}>{detail?.Released}</td>
                  </tr>
                  <tr>
                    <td>Runtime</td>
                    <td colSpan={2}>{detail?.Runtime}</td>
                  </tr>
                  <tr>
                    <td>Genre</td>
                    <td colSpan={2}>{detail?.Genre}</td>
                  </tr>
                  <tr>
                    <td>Director</td>
                    <td colSpan={2}>{detail?.Director}</td>
                  </tr>
                  <tr>
                    <td>Writer</td>
                    <td colSpan={2}>{detail?.Writer}</td>
                  </tr>
                  <tr>
                    <td>Actors</td>
                    <td colSpan={2}>{detail?.Actors}</td>
                  </tr>
                  <tr>
                    <td>Plot</td>
                    <td colSpan={2}>{detail?.Plot}</td>
                  </tr>
                  <tr>
                    <td>Language</td>
                    <td colSpan={2}>{detail?.Language}</td>
                  </tr>
                  <tr>
                    <td>Country</td>
                    <td colSpan={2}>{detail?.Country}</td>
                  </tr>
                  <tr>
                    <td>Awards</td>
                    <td colSpan={2}>{detail?.Awards}</td>
                  </tr>
                  <tr>
                    <td rowSpan={ratingRowSpan}>Ratings</td>
                  </tr>
                  {
                    detail?.Ratings?.map((rating, index) => (
                      <tr key={`rating-${index}`}>
                        <td>{rating.Source}</td>
                        <td>{rating.Value}</td>
                      </tr>
                    ))
                  }
                  <tr>
                    <td>Metascore</td>
                    <td colSpan={2}>{detail?.Metascore}</td>
                  </tr>
                  <tr>
                    <td>IMDB Rating</td>
                    <td colSpan={2}>{detail?.imdbRating}</td>
                  </tr>
                  <tr>
                    <td>IMDB Votes</td>
                    <td colSpan={2}>{detail?.imdbVotes}</td>
                  </tr>
                  <tr>
                    <td>DVD</td>
                    <td colSpan={2}>{detail?.DVD}</td>
                  </tr>
                  <tr>
                    <td>Box Office</td>
                    <td colSpan={2}>{detail?.BoxOffice}</td>
                  </tr>
                  <tr>
                    <td>Production</td>
                    <td colSpan={2}>{detail?.Production}</td>
                  </tr>
                  <tr>
                    <td>Website</td>
                    <td colSpan={2}>
                      {
                        detail?.Website?.toLowerCase() === 'n/a' ? detail.Website :
                          <a href={detail?.Website}>Click here</a>
                      }
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </>
      }
    </Container>
  );
}