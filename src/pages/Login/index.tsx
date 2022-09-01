import { SubmitHandler, useForm } from "react-hook-form";

import { Header } from "../../components/Header";

import { Container, CustomIput } from "./styles";

type InputsTypes = {
  email: string;
  password: string;
};

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
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
