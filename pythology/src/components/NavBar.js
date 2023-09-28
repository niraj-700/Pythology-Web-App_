import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';


function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">PATLIPUTRA</Navbar.Brand>
        <Button variant="outline-dark">History</Button>
      </Container>
    </Navbar>
  );
}

export default BasicExample;