import { useContext, useState } from "react";

import { useNavigate } from "react-router-dom";

import { SubmitHandler, useForm } from "react-hook-form";

import { AuthContext } from "../../contexts/Auth/AuthContext";

import type { InputsTypes } from "../../types/Input";

import { Header } from "../../components/Header";

import { CustomIput } from "../../styles/customInput";
import { Container } from "./styles";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signin } = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputsTypes>();

  const onSubmit: SubmitHandler<InputsTypes> = ({
    email,
    password,
  }: InputsTypes) => {
    setEmail(email);
    setPassword(password);

    handleLogin();
  };

  const handleLogin = async () => {
    if (email && password) {
      const isLogged = await signin({
        email,
        password,
      });

      if (isLogged) navigate("/private");
    }
  };

  return (
    <>
      <Header />
      <Container>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Sign in</h1>
          <label htmlFor="email">
            <CustomIput
              hasError={Boolean(errors.email)}
              id="email"
              type="email"
              placeholder="Email address"
              {...register("email", { required: true })}
            />
          </label>

          <label htmlFor="password">
            <CustomIput
              hasError={Boolean(errors.password)}
              id="password"
              type="password"
              placeholder="Password"
              {...register("password", { required: true })}
            />
          </label>
          <input type="submit" value="Sign in" />
        </form>
        <div className="create-account">
          <span>Don't have a account?</span>
          <button>Create new account</button>
        </div>
      </Container>
    </>
  );
};

export { Login };
