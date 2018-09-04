export interface IPosition {
  line: number;
  column: number;
}

export interface IComment {
  type: "Line" | "Block";
  value: string;
  loc: {
    start: IPosition;
    end: IPosition;
  };
  range: [number, number];
  start: number;
  end: number;
}
