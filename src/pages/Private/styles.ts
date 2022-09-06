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

  .profile-image {
    display: flex;
    position: relative;

    img {
      margin-top: 2rem;
      border-radius: 50%;
    }

    .change-profile-image {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      padding: 0.4rem;
      background-color: var(--gray-100);
      position: absolute;
      right: 0.5rem;
      bottom: 0.5rem;
      cursor: pointer;

      &:hover {
        .change-profile-image-icon {
          color: var(--gray-300);
        }
      }

      .change-profile-image-icon {
        font-size: 1.2rem;
        color: var(--white-300);
      }
    }
  }

  p:first-of-type {
    margin-top: 1rem;
  }

  p {
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--gray-200);

    span {
      font-weight: 400;
    }
  }
`;
