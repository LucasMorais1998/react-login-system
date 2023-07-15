import { SubmitHandler, useForm } from 'react-hook-form';

import type { InputsTypes } from '../../types/Input';

import { Header } from '../../components/Header';

import { CustomIput } from '../../styles/customInput';
import { Container } from './styles';

interface RegisterInputs extends InputsTypes {
  firstName: string;
  lastName: string;
  company?: string;
}

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterInputs>();

  const onSubmit: SubmitHandler<RegisterInputs> = () => {
    console.log('data');
  };

  return (
    <>
      <Header />
      <Container>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Create an account</h1>
          <label htmlFor="firstName">
            <CustomIput
              hasError={Boolean(errors.firstName)}
              id="firstName"
              type="text"
              placeholder="First name"
              {...register('firstName', { required: true })}
            />
          </label>

          <label htmlFor="lastName">
            <CustomIput
              hasError={Boolean(errors.lastName)}
              id="lastName"
              type="text"
              placeholder="Last name"
              {...register('lastName', { required: true })}
            />
          </label>

          <label htmlFor="company">
            <CustomIput
              id="company"
              type="text"
              placeholder="Company"
              {...register('company', { required: false })}
            />
          </label>

          <label htmlFor="email">
            <CustomIput
              hasError={Boolean(errors.email)}
              id="email"
              type="email"
              placeholder="Email address"
              {...register('email', { required: true })}
            />
          </label>

          <label htmlFor="password">
            <CustomIput
              hasError={Boolean(errors.password)}
              id="password"
              type="password"
              placeholder="Password"
              {...register('password', { required: true })}
            />
          </label>
          <input type="submit" value="Sign up" />
        </form>
      </Container>
    </>
  );
};

export { Register };
