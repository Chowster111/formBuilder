// src/components/FormCanvas.tsx
import { DroppableCell } from "./DroppableCell";
import { type FormElement } from "../types/types";
import "../styles/FormCanvas.css";

export function FormCanvas({
  grid,
}: {
  grid: (FormElement | null)[];
}) {
  return (
    <div className="form-canvas">
      {grid.map((content, i) => (
        <DroppableCell key={i} index={i} content={content} />
      ))}
    </div>
  );
}
