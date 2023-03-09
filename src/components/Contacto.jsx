import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';


function BasicExample() {
  return (
    <Form className='m-5 row justify-content-center'>
      <Card.Title className='textfor' id='textfor'>Cuentanos, ¿ en que te podemos ayudar?</Card.Title>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label >Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="danger" type="submit" id="btn" className='bg-danger btn'>
        Submit
      </Button>
    </Form>
  );
}

export default BasicExample;