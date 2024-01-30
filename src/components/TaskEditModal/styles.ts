import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: white;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  padding: 4rem 3rem 2rem;
  max-width: 500px;
  max-height: fit-content;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  margin: 1rem;
  position: absolute;
  top: 0;
  right: 0;
  width: fit-content;
`;
