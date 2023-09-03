import Form from 'react-bootstrap/Form';

function FormGroupExample() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Adres e-mail:</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Hasło:</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
    </Form>
  );
}

export default FormGroupExample;