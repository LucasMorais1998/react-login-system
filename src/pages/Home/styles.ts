import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
  gap: 0.5rem;

  h1 {
    color: var(--gray-300);
    font-size: 1.3rem;
  }

  p:first-of-type {
    margin-top: 2rem;
  }

  p {
    font-size: 1.1rem;
    font-weight: 400;
    color: var(--gray-200);

    span {
      font-weight: 600;

      a {
        text-decoration: none;
        color: var(--blue-100);
        transition: all ease-in-out 0.2s;

        &:hover {
          color: var(--blue-200);
          border-bottom: 0.5px solid var(--blue-200);
        }
      }
    }
  }
`;
