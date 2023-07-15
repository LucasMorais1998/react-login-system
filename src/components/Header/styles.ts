import styled from 'styled-components';

export const Container = styled.header`
  nav {
    display: flex;
    justify-content: center;
    background-color: var(--white-200);
    box-shadow: 0px 1px 5px 0 var(--gray-300);

    ul {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 2rem 0.8rem;
      gap: 2rem;

      li {
        list-style-type: none;

        a {
          text-decoration: none;
          text-transform: uppercase;
          font-weight: bold;
          color: var(--gray-300);
          font-size: 1.3rem;
          padding-bottom: 0.1rem;
          transition: all ease 0.2s;
          opacity: 0.7;

          &:hover {
            border-bottom: 1.5px solid var(--gray-300);
            opacity: 1;
          }
        }
      }
    }
  }
`;
