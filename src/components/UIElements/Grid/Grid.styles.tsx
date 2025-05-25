import styled from "styled-components";
import { GridProps } from "./Grid.types";

const StyledGrid = styled.div<GridProps>`
  display: grid;
  grid-template-columns: ${(props) =>
    props.templateColumn ? props.templateColumn : ""};
  grid-template-rows: ${(props) =>
    props.templateRow ? props.templateRow : ""};
  grid-gap: ${(props) => (props.gap ? props.gap : "")};
  grid-row-gap: ${(props) => (props.rowGap ? props.rowGap : "")};
  grid-column-gap: ${(props) => (props.columnGap ? props.columnGap : "")};
  height: ${({ height }) => height || "auto"};
  width: ${({ width }) => width || "auto"};
  margin: ${({ margin }) => margin || "0"};
`;

export default StyledGrid;
