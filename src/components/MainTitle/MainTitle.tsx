import { Container, Navbar } from "react-bootstrap";

export const MainTitle = () => {
  return (
    <Navbar bg='light' variant='light' expand='lg' sticky='top'>
      <Container fluid>
        <Navbar.Brand>
          Movie Web App
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};