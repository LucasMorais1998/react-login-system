import styled from "styled-components";

export const Container = styled.div`
  h1 {
    text-align: center;
    font-size: 1.3rem;
    margin-bottom: 0.8rem;
    color: var(--gray-300);
  }

  form {
    display: flex;
    flex-direction: column;
    width: 350px;
    gap: 1rem;
    margin: 0 auto;
    margin-top: 5rem;
    padding: 2rem;

    input[type="submit"] {
      margin-top: 1rem;
      background-color: var(--blue-100);
      color: var(--white-100);
      padding: 0.6rem;
      height: 2.8rem;
      font-size: 0.9rem;
      font-weight: 500;
      border: none;
      cursor: pointer;
      transition: background-color ease 0.2s;

      &:hover {
        background-color: var(--blue-200);
      }
    }
  }

  .create-account {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    margin-top: 2rem;

    span {
      color: var(--gray-200);
      font-weight: 500;
    }

    button {
      width: 280px;
      margin-top: 0.3rem;
      background-color: var(--white-100);
      color: var(--gray-200);
      padding: 0.7rem;
      height: 2.8rem;
      font-weight: 500;
      font-size: 1rem;
      border: 0.3px solid var(--white-300);
      border-radius: 0.3rem;
      cursor: pointer;
      transition: all border 0.2s;

      &:hover {
        border: 0.3px solid var(--gray-100);
      }
    }
  }
`;

interface IInputProps {
  hasError: boolean;
}

export const CustomIput = styled.input<IInputProps>`
  width: 100%;
  height: 2.6rem;
  padding: 0.7rem;
  background-color: ${(props) =>
    props.hasError ? "rgba(255, 99, 71, 0.2)" : "var(--white-200)"};
  border-radius: 0.3rem;
  font-size: 1rem;
  font-weight: 500;
  border: 0.3px solid var(--white-300);
  transition: all ease 0.2s;
  outline: none;

  :focus {
    outline: 0.3px solid var(--blue-200);
    outline: ${(props) =>
      props.hasError ? "0.3px solid red" : "0.3px solid var(--blue-200)"};
    border: none;

    &:hover {
      border: none;
    }
  }

  &:hover {
    background-color: var(--white-300);
    border: 0.3px solid var(--gray-100);

    ::placeholder {
      color: var(---gray-100);
      transition: all ease 0.2s;
    }

    ::-ms-input-placeholder {
      color: var(---gray-100);
      transition: all ease 0.2s;
    }
  }

  ::placeholder {
    color: var(--gray-100);
    opacity: 0.4;
  }

  ::-ms-input-placeholder {
    color: var(--gray-100);
    opacity: 0.4;
  }
`;
