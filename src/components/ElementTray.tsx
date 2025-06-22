import { DraggableElement } from "./DraggableElement";
import { initElements } from "../constants/constants";
import "../styles/ElementTray.css";

export function ElementTray() {
  return (
    <div className="element-tray">
      {initElements.map((el) => (
        <DraggableElement key={el.id} element={el} />
      ))}
    </div>
  );
}
