import { SubmitHandler, useForm } from "react-hook-form";

import type { InputsTypes } from "../../types/Input";

import { Header } from "../../components/Header";

import { Container } from "./styles";
import { CustomIput } from "../../styles/customInput";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputsTypes>();

  const onSubmit: SubmitHandler<InputsTypes> = () => {
    console.log("data");
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
