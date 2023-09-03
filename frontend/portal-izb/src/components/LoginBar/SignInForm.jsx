import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

function FormExample() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <h2>Rejestracja</h2>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Imię:</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Wpisz  imię"
          />
          <Form.Control.Feedback>OK</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Nazwisko:</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Wpisz nazwisko"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Nazwa użykownika:</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Username"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Taka nazwa użytkownika już istnieje
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>Miejscowość</Form.Label>
          <Form.Control type="text" placeholder="Podaj miejscowość zamieszkania" required />
          <Form.Control.Feedback type="invalid">
            Podaj skąd jesteś
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>Adres</Form.Label>
          <Form.Control type="text" placeholder="Adres" required />
          <Form.Control.Feedback type="invalid">
            Podaj swój adres
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Label>Kod pocztowy</Form.Label>
          <Form.Control type="text" placeholder="Kod pocztowy" required />
          <Form.Control.Feedback type="invalid">
            Podaj kod pocztowy
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <br/>
      <Row className='email'>
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>Podaj adres email:</Form.Label>
          <Form.Control type="email" placeholder="Podaj swój adres e-mail" required />
          <Form.Control.Feedback type="invalid">
            Niepoprawny adres e-mail
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      
      <Row className='password'>
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>Podaj hasło</Form.Label>
          <Form.Control type="text" placeholder="Podaj hasło" required />
          <Form.Control.Feedback type="invalid">
            Niepoprawne hasło
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>Powtórz hasło</Form.Label>
          <Form.Control type="text" placeholder="Podaj hasło" required />
          <Form.Control.Feedback type="invalid">
            Niepoprawne hasło
          </Form.Control.Feedback>
        </Form.Group>

      </Row>
      

      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>
      <div className="submitButton">
        <Button id="submit" type="submit">Zarejestruj</Button>
      </div>
      <br/>
    </Form>
  );
}

export default FormExample;