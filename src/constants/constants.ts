import { type FormElement } from "../types/types";

export const initElements: FormElement[] = [
  { id: "title-signup", type: "title", label: "Sign Up" },
  { id: "input-first", type: "input", label: "First Name" },
  { id: "input-last", type: "input", label: "Last Name" },
  { id: "input-email", type: "input", label: "Email Address" },
  { id: "input-phone", type: "input", label: "Phone Number" },
  { id: "button-submit", type: "button", label: "Submit" },
];

export const initialGrid: (FormElement | null)[] = [
    null,
    null, null,   
    null           
];