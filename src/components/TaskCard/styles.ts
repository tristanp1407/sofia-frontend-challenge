import styled from "styled-components";
import MuiCheckbox from "@mui/material/Checkbox";

import { Typography } from "@components/Typography";

export const Container = styled.div`
  background-color: ${(p) => p.theme.colors.background.white};
  border-radius: 1rem;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
`;

export const Description = styled(Typography)`
  overflow: hidden;
  margin: 0;
  max-width: 20rem;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: none;

  ${Container}:hover & {
    display: block;
  }
`;

export const Pill = styled.div`
  border: ${(p) => "1px solid " + p.theme.colors.text.light};
  color: ${(p) => p.theme.colors.text.light};
  border-radius: 999rem;
  padding: 0.3rem 0.7rem;
  width: fit-content;
`;
