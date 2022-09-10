import styled from "styled-components";

interface IContainerProps {
  isUploading: boolean;
}

export const Container = styled.div<IContainerProps>`
  img {
    width: 150px;
    height: 150px;
    object-fit: cover;
    margin-top: 2rem;
    border-radius: 50%;
    animation: ${(props) =>
      props.isUploading ? "rotation 4s infinite linear;" : ""};
  }

  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
`;

export const ModalOptions = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  gap: 1rem;
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

  .submit-image-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: 90px;
    height: 35px;
    border: none;
    background-color: var(--blue-100);
    color: var(--white-100);
    border-radius: 0.3rem;

    &:hover {
      background-color: var(--blue-200);
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
