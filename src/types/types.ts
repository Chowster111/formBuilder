export type FormElementType = "title" | "input" | "button";

export interface FormElement {
  id: string;
  type: FormElementType;
  label: string;
}
