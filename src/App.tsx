import "./styles/App.css";
import { useState } from "react";
import { DndContext, type DragEndEvent } from "@dnd-kit/core";
import { ElementTray } from "./components/ElementTray";
import { FormCanvas } from "./components/FormCanvas";
import { type FormElement } from "./types/types";

function App() {
  const cols = 2;
  const [rows, setRows] = useState(1);

  const initialGrid: (FormElement | null)[] = [
    null,          // title (spans 2 columns)
    null, null,    // 1st input row
    null           // submit slot (spans 2 columns)
  ];

  const [grid, setGrid] = useState<(FormElement | null)[]>(initialGrid);

  const getSubmitIndex = () => 1 + rows * cols;

  const handleDragEnd = (event: DragEndEvent) => {
    const { over, active } = event;
    const element = active.data.current?.element as FormElement;

    if (!over || !element) return;

    const dropIndex = parseInt(String(over.id).replace("cell-", ""));
    const titleIndex = 0;
    const submitIndex = getSubmitIndex();

    if (element.type === "title" && dropIndex !== titleIndex) return;
    if (dropIndex === titleIndex && element.type !== "title") return;
    if (element.type === "button") {
      if (dropIndex !== submitIndex) return;
      if (grid[submitIndex]) return;
    }

    const newGrid = [...grid];
    newGrid[dropIndex] = element;
    setGrid(newGrid);
  };

  const handleAddRow = () => {
    const core = grid.slice(1, grid.length - 1);
    const updatedCore = [...core, null, null];
    const newGrid = [grid[0], ...updatedCore, null];
    setRows(rows + 1);
    setGrid(newGrid);
  };

  const handleRemoveRow = () => {
    if (rows === 1) return;
    const core = grid.slice(1, grid.length - 1).slice(0, -2);
    const newGrid = [grid[0], ...core, grid[grid.length - 1]];
    setRows(rows - 1);
    setGrid(newGrid);
  };

  const handleReset = () => {
    setRows(1);
    setGrid([
      null,
      null, null,
      null,
    ]);
  };

  return (
    <div className="page-wrapper">
      <DndContext onDragEnd={handleDragEnd}>
        <ElementTray />
        <div className="row-actions">
          <button className="add-row-button" onClick={handleAddRow}>➕ Add Row</button>
          <button className="remove-row-button" onClick={handleRemoveRow}>➖ Remove Row</button>
          <button className="reset-button" onClick={handleReset}>🔄 Reset Layout</button>
        </div>
        <FormCanvas grid={grid} rows={rows + 2} cols={cols} />
      </DndContext>
    </div>
  );
}

export default App;
