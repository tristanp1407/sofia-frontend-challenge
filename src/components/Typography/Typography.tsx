import React from "react";
import { TypographyProps } from "@mui/material/Typography";

import * as Styled from "./styles";

export type Colors = "neutral" | "light";

interface CustomTypographyProps extends TypographyProps {
  color?: Colors;
  variant?: TypographyProps["variant"];
  strikethrough?: boolean;
}

export const Typography: React.FC<CustomTypographyProps> = ({
  color = "neutral",
  variant = "body1",
  strikethrough = false,
  children,
  ...rest
}) => {
  return (
    <Styled.Typography
      color={color}
      variant={variant}
      strikethrough={strikethrough}
      {...rest}
    >
      {children}
    </Styled.Typography>
  );
};

export default Typography;
