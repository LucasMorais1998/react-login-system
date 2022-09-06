import styled from "styled-components";

export const Container = styled.div`
  img {
    border-radius: 50%;
  }
`;

export const ModalOptions = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 2rem;

  .delete-image-icon {
    cursor: pointer;
    width: 90px;
    height: 35px;
    padding: 0.6rem;
    background-color: var(--gray-100);
    color: var(--white-100);
    border-radius: 0.3rem;

    &:hover {
      background-color: var(--gray-300);
    }
  }
`;

export const CustomLabel = styled.label`
  display: flex;
  align-items: center;

  .change-image-icon {
    cursor: pointer;
    width: 90px;
    height: 35px;
    padding: 0.6rem;
    background-color: var(--gray-100);
    color: var(--white-100);
    border-radius: 0.3rem;

    &:hover {
      background-color: var(--gray-300);
    }
  }

  input[type="file"] {
    display: none;

    &::file-selector-button {
      display: none;
    }
  }
`;
