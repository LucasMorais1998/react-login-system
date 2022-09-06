import { BsCameraFill } from "react-icons/bs";

import { Header } from "../../components/Header";

import { Container } from "./styles";

const Private = () => {
  return (
    <>
      <Header />
      <Container>
        <h1>Private Page</h1>
        <div className="profile-image">
          <img src="https://placehold.jp/150x150.png" alt="profile image" />
          <div className="change-profile-image">
            <BsCameraFill className="change-profile-image-icon" />
          </div>
        </div>
        <p>
          Name: <span>firstName + lastName</span>
        </p>
        <p>
          Company: <span>company</span>
        </p>
        <p>
          Email: <span>email</span>
        </p>
      </Container>
    </>
  );
};

export { Private };
