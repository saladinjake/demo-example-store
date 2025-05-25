import { IGridItemProps, IGridProps } from "./Grid.types";
import Base from "../Base/Base";
import styled from "styled-components";

export const GridRoot = styled(Base)<IGridProps>`
  display: grid;
  grid-template-columns: ${(props) =>
    props.templateColumn ? props.templateColumn : ""};
  grid-template-rows: ${(props) =>
    props.templateRow ? props.templateRow : ""};
  grid-gap: ${(props) => (props.gap ? props.gap : "")};
  grid-row-gap: ${(props) => (props.rowGap ? props.rowGap : "")};
  grid-column-gap: ${(props) => (props.columnGap ? props.columnGap : "")};
`;

export const Item = styled(Base)<IGridItemProps>`
  ${(props) => (props.column ? `grid-column: ${props.column}` : "")};
  ${(props) =>
    props.columnStart ? `grid-column-start: ${props.columnStart}` : ""};
  ${(props) => (props.columnEnd ? `grid-column-end: ${props.columnEnd}` : "")};
  ${(props) => (props.row ? `grid-row: ${props.row}` : "")};
  ${(props) => (props.rowStart ? `grid-row-start: ${props.rowStart}` : "")};
  ${(props) => (props.rowEnd ? `grid-row-end: ${props.rowEnd}` : "")};
`;
