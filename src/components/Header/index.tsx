import { Link } from "react-router-dom";

import { Container } from "./styles";

const Header = () => {
  return (
    <Container>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/private">Private</Link>
          </li>
        </ul>
      </nav>
    </Container>
  );
};

export { Header };
