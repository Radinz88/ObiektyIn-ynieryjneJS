import React  from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import logIcon from "../../assets/icons/circle-user-regular.svg";
import LoginForm from './LoginForm';

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Zaloguj się
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>

        <LoginForm />

      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Anuluj</Button>
      </Modal.Footer>
    </Modal>
  );
}

function LoginButton() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div>
      <Button className="box4" variant="primary" onClick={() => setModalShow(true)}>
        <img id="login" src={logIcon} alt="Ikona użytkownika" width="20" />
        <span id="login">Zaloguj</span>
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}

export default LoginButton;
