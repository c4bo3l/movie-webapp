import { Container, Navbar } from "react-bootstrap";
import { ChevronLeft } from 'react-bootstrap-icons';
import { useHistory } from "react-router";

export const DetailTitle = () => {
  const history = useHistory();

  const back = () => {
    history.goBack();
  };

  return (
    <Navbar bg='light' variant='light' expand='lg' sticky='top'>
      <Container fluid>
        <Navbar.Brand 
          href='#' 
          onClick={back}
          style={{
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <ChevronLeft /> Back
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};