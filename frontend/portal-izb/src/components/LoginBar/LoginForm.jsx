import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function FormGroupExample() {
  return (
    <Form>
      <h2>Logowanie</h2>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Adres e-mail:</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Hasło:</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <div className="submitButton">
        <Button id="submit" type="submit">Zaloguj</Button>
      </div>
      <br/>
    </Form>
  );
}

export default FormGroupExample;