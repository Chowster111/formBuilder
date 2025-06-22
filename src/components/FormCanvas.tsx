import { DroppableCell } from "./DroppableCell";
import { type FormElement } from "../types/types";
import "../styles/FormCanvas.css";

export function FormCanvas({
  grid,
  rows,
  cols,
}: {
  grid: (FormElement | null)[];
  rows: number;
  cols: number;
}) {
  return (
    <div
      className="form-canvas"
      style={{
        gridTemplateColumns: `repeat(${cols}, 250px)`,
        gridTemplateRows: `repeat(${rows}, 75px)`,
      }}
    >
      {grid.map((content, i) => {
        const isTitle = i === 0;
        const isSubmit = i === grid.length - 1;
        const span = isTitle || isSubmit ? 2 : 1;

        return (
          <DroppableCell
            key={i}
            index={i}
            content={content}
            span={span}
          />
        );
      })}
    </div>
  );
}
