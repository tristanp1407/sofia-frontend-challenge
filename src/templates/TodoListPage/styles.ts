import styled from "styled-components";

export const PageContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-height: 100vh;
  max-width: 40rem;
  overflow: hidden;
  padding: 0 1rem;
`;

export const NoTasksContainer = styled.div`
  background-color: ${(p) => p.theme.colors.background.white};
  border-radius: 1rem;
  padding: 1rem;
  text-align: center;
`;

export const ScrollArea = styled.div`
  overflow: scroll;
  flex-grow: 1;
  width: 100%;
`;
