// src/components/ElementTray.tsx
import { DraggableElement } from "./DraggableElement";
import { type FormElement } from "../types/types";
import "../styles/ElementTray.css";

const elements: FormElement[] = [
  { id: "title-signup", type: "title", label: "Sign Up" },
  { id: "input-first", type: "input", label: "First Name" },
  { id: "input-last", type: "input", label: "Last Name" },
  { id: "input-email", type: "input", label: "Email Address" },
  { id: "input-phone", type: "input", label: "Phone Number" },
  { id: "button-submit", type: "button", label: "Submit" },
];

export function ElementTray() {
  return (
    <div className="element-tray">
      {elements.map((el) => (
        <DraggableElement key={el.id} element={el} />
      ))}
    </div>
  );
}
