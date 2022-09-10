import { useContext } from "react";

import { Link, useNavigate } from "react-router-dom";

import { AuthContext } from "../../contexts/Auth/AuthContext";

import { Container } from "./styles";

const Header = () => {
  const { user, signout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signout();

    navigate("/");
  };

  return (
    <Container>
      <nav>
        <ul>
          {!user ? (
            <>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/private">Private</Link>
              </li>
              <li>
                {user && (
                  <Link to="/" onClick={handleLogout}>
                    Sair
                  </Link>
                )}
              </li>
            </>
          )}
        </ul>
      </nav>
    </Container>
  );
};

export { Header };
