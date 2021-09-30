import { Card } from "react-bootstrap";
import { useHistory } from "react-router";
import { movieModel } from "../../models";
import { DETAIL_LINK, NO_AVAILABLE_IMAGE_URL } from "../../shared";

interface MovieProps extends movieModel { }

export const Movie = (props: MovieProps) => {
  const history = useHistory();
  const imgSrc = !!!props.Poster || props.Poster.toLowerCase() === 'n/a' ?
    NO_AVAILABLE_IMAGE_URL :
    props.Poster;

  const goToDetailPage = () => {
    history.push(`${DETAIL_LINK}/${props.imdbID}`);
  };

  return (
    <Card
      key={props.imdbID}
      style={{ 
        width: '18rem',
        cursor: 'pointer'
      }}
      onClick={goToDetailPage}
    >
      <Card.Img variant="top" src={imgSrc} height='386' />
      <Card.Body>
        <Card.Title>
          {props.Title}
        </Card.Title>
        <Card.Subtitle>
          {props.Year}
        </Card.Subtitle>
      </Card.Body>
    </Card>
  );
};
