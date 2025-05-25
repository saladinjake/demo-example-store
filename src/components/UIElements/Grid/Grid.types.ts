export interface GridProps {
  templateRow?: string;
  templateColumn?: string;
  gap?: string;
  columnGap?: string;
  rowGap?: string;
  height?: string;
  width?: string;
  margin?: string;
  children?: React.ReactNode;
  style?: Record<string, any>;
}

export interface IGridProps {
  templateColumn?: string;
  templateRow?: string;
  gap?: string;
  rowGap?: string;
  columnGap?: string;
}

export interface IGridItemProps {
  column?: string;
  columnStart?: string;
  columnEnd?: string;
  row?: string;
  rowStart?: string;
  rowEnd?: string;
}
