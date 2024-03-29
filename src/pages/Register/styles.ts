import styled from 'styled-components';

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

    input[type='submit'] {
      margin-top: 1rem;
      background-color: var(--blue-100);
      color: var(--white-100);
      padding: 0.6rem;
      height: 2.8rem;
      font-size: 0.9rem;
      font-weight: 500;
      border: none;
      border-radius: 0.3rem;
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
