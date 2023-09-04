import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Contact.css';

function ContactForm() {
  return (
    <div id='contactForm'>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Adres e-mail</Form.Label>
          <br/>
          <Form.Control type="email" placeholder="np. email@email.com" style={{minWidth: "260px"}}/>
        </Form.Group>
          <br/>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Wiadomość</Form.Label>
          <br/>
          <Form.Control as="textarea" rows={3} placeholder="Tu wpisz treść wiadomości" style={{minHeight: "250px", minWidth: "260px"}}/>
        </Form.Group>

        <div id='btn'>
          <Button  as="input" type="submit" value="Wyślij do Nas wiadomość" />{' '}
        </div>
        
      </Form>
    </div>
  );
}

export default ContactForm;