import { useDroppable } from "@dnd-kit/core";
import { type FormElement } from "../types/types";
import "../styles/DroppableCell.css";

export function DroppableCell({
  index,
  content,
  span = 1,
}: {
  index: number;
  content: FormElement | null;
  span?: number;
}) {
  const { setNodeRef, isOver } = useDroppable({
    id: `cell-${index}`,
    data: { index },
  });

  const cellClass = isOver ? "droppable-cell hovered" : "droppable-cell";

  const gridStyle: React.CSSProperties = {
    gridColumn: `span ${span}`,
  };

  let rendered = null;
  if (content) {
    if (content.type === "title") {
      rendered = <h2 className="cell-title">{content.label}</h2>;
    } else if (content.type === "input") {
      rendered = <input className="cell-input" placeholder={content.label} />;
    } else if (content.type === "button") {
      rendered = <button className="cell-button">{content.label.toUpperCase()}</button>;
    }
  } else if (index === 0) {
    rendered = <span className="cell-placeholder">Add title here</span>;
  }

  return (
    <div ref={setNodeRef} className={cellClass} style={gridStyle}>
      {rendered}
    </div>
  );
}
