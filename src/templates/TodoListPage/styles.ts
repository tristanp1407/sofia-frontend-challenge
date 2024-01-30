import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 40rem;
  padding: 1rem;
`;

export const NoTasksContainer = styled.div`
  background-color: ${(p) => p.theme.colors.background.white};
  border-radius: 1rem;
  padding: 1rem;
  text-align: center;
`;
