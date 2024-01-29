import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: white;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 3rem;
  max-width: 500px;
  max-height: fit-content;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
`;

export const CloseButton = styled.button`
  border: none;
  background: none;
  margin: 0 0 0 auto;
  width: fit-content;
`;
