import React from "react";

import { StyledFlex } from "./styles";

export interface FlexProps {
  children: React.ReactNode;
  /** Controls space between flex lines on the cross axis */
  alignContent?:
    | "stretch"
    | "center"
    | "flex-start"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "initial"
    | "inherit";
  /** Controls alignment of all items on the cross axis */
  alignItems?:
    | "stretch"
    | "center"
    | "flex-start"
    | "flex-end"
    | "baseline"
    | "initial"
    | "inherit";
  /** Controls alignment of an individual item on the cross axis */
  alignSelf?:
    | "auto"
    | "stretch"
    | "center"
    | "flex-start"
    | "flex-end"
    | "baseline"
    | "initial"
    | "inherit";
  /** Shorthand property that sets how an item will grow or shrink to fit the space available in the container */
  flex?: number | string;
  /** Controls the initial main size of an item */
  flexBasis?: number | "auto" | "initial" | "inherit";
  /** Controls how items are placed in the flex container defining the main axis and the direction */
  flexDirection?:
    | "row"
    | "row-reverse"
    | "column"
    | "column-reverse"
    | "initial"
    | "inherit";
  /** Controls how much of the remaining space in the container should be assigned to the item */
  flexGrow?: number | "initial" | "inherit";
  /** Controls whether items are forced onto one line or can wrap */
  flexWrap?: "nowrap" | "wrap" | "wrap-reverse" | "initial" | "inherit";
  /** Sets the gutter between rows and columns in rem */
  gap?: number;
  /** Controls alignment of all items on the main axis */
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "initial"
    | "inherit";
}

export const Flex: React.FunctionComponent<FlexProps> = ({
  children,
  ...restProps
}) => <StyledFlex {...restProps}>{children}</StyledFlex>;
