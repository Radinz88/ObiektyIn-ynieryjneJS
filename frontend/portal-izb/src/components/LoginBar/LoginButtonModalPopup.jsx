import React, {useState}  from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import logIcon from "../../assets/icons/circle-user-regular.svg";
import LoginForm from './LoginForm';
import SignInForm from './SignInForm';
import './LoginButtonModal.css';

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>

      {props.showLogin ? <LoginForm /> : <SignInForm />}

      <label>
        {props.showLogin ? (
          <div>
            Jeśli nie masz jeszcze konta w serwisie{' '}
            <span className="blueText" onClick={props.toggleForm}>zarejestruj się</span>.
          </div>
        ) : (
          <div>
            Masz już konto? <span className="blueText" onClick={props.toggleForm}>Zaloguj się</span>.
          </div>
        )}
      </label>

      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Anuluj</Button>
      </Modal.Footer>
    </Modal>
  );
}



function LoginButton() {
  const [modalShow, setModalShow] = React.useState(false);
  const [showLogin, setShowLogin] = useState(true);

  const toggleForm = () => {
    setShowLogin(!showLogin);
  };

  return (
    <div>
      <button className="box4" onClick={() => setModalShow(true)}      >
        <img id="loginIMG" src={logIcon} alt="Ikona użytkownika" width="20" />
        <div  id="loginText" type="text">Zaloguj</div>
      </button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        showLogin={showLogin}
        toggleForm={toggleForm}
      />
    </div>
  )
}

export default LoginButton;
