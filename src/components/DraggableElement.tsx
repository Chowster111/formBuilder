// src/components/DraggableElement.tsx
import { useDraggable } from "@dnd-kit/core";
import { type FormElement } from "../types/types";
import "../styles/DraggableElement.css";

export function DraggableElement({ element }: { element: FormElement }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: element.id,
    data: { element },
  });

  const style = {
    transform: transform
      ? `translate(${transform.x}px, ${transform.y}px)`
      : undefined,
  };

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={style}
      className="draggable-element"
    >
      {element.label}
    </div>
  );
}
