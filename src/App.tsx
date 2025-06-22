// src/App.tsx
import "./styles/App.css";
import { useState } from "react";
import { DndContext, type DragEndEvent } from "@dnd-kit/core";
import { ElementTray } from "./components/ElementTray";
import { FormCanvas } from "./components/FormCanvas";
import { type FormElement } from "./types/types";

function App() {
  const [grid, setGrid] = useState<(FormElement | null)[]>(Array(8).fill(null));

  const handleDragEnd = (event: DragEndEvent) => {
    const { over, active } = event;
    if (over && active.data.current?.element) {
      const index = parseInt(String(over.id).replace("cell-", ""));
      const element = active.data.current.element as FormElement;
      setGrid((prev) => {
        const newGrid = [...prev];
        newGrid[index] = element;
        return newGrid;
      });
    }
  };

  const handleReset = () => {
    setGrid(Array(8).fill(null));
  };

  return (
    <div className="page-wrapper">
      <DndContext onDragEnd={handleDragEnd}>
        <ElementTray />
        <FormCanvas grid={grid} />
        <button className="reset-button" onClick={handleReset}>
          Reset Form
        </button>
      </DndContext>
    </div>
  );
}

export default App;
