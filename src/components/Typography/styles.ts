import styled, { css } from "styled-components";
import MuiTypography from "@mui/material/Typography";

import { Colors } from ".";

interface TypographyProps {
  color?: Colors;
  strikethrough?: boolean;
}

export const Typography = styled(MuiTypography)<TypographyProps>`
  ${({ color, theme }) =>
    color &&
    css`
      color: ${theme.colors.text[color]};
    `}

  ${({ strikethrough }) =>
    strikethrough &&
    css`
      text-decoration: line-through;
    `}
`;
