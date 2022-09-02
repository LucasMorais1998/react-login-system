import styled from "styled-components";

interface IInputProps {
  hasError?: boolean;
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
