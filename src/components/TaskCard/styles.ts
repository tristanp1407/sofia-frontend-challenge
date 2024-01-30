import styled from "styled-components";
import MuiIconButton from "@mui/material/IconButton";
import MuiCheckbox from "@mui/material/Checkbox";

import { Typography } from "@components/Typography";

export const Container = styled.div`
  align-items: center;
  background-color: ${(p) => p.theme.colors.background.white};
  border-radius: 1rem;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  position: relative;
`;

export const Description = styled(Typography)`
  overflow: hidden;
  margin: 0;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 25rem;

  @media (max-width: 768px) {
    max-width: 20rem;
  }

  @media (max-width: 576px) {
    max-width: 15rem;
  }

  @media (max-width: 375px) {
    max-width: 10rem;
  }
`;

export const ButtonContainer = styled.div`
  display: none;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(0, -50%);
  border-radius: 999rem;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.background.white};

  ${Container}:hover & {
    display: flex;
  }
`;

export const IconButton = styled(MuiIconButton)`
  height: fit-content;
  width: fit-content;
`;

export const Checkbox = styled(MuiCheckbox)`
  height: fit-content;
`;

export const Pill = styled.div`
  border: ${(p) => "1px solid " + p.theme.colors.text.light};
  color: ${(p) => p.theme.colors.text.light};
  border-radius: 999rem;
  padding: 0.3rem 0.7rem;
  width: fit-content;
`;
