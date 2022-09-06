import { Link } from "react-router-dom";

import Modal from "react-modal";

import { Header } from "../../components/Header";

import { Container } from "./styles";

Modal.setAppElement("#root");

const Home = () => {
  return (
    <>
      <Header />
      <Container>
        <h1>Login System</h1>
        <p>
          <span>
            <Link to="/login">Login</Link>&nbsp;
          </span>
          to access our content.
        </p>
        <p>
          Don't have a account? Create new account&nbsp;
          <span>
            <Link to="/register">here</Link>
          </span>
          .
        </p>
      </Container>
    </>
  );
};

export { Home };
