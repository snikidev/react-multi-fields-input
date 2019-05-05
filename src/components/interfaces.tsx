interface Inputs {
  type: "number" | "text";
  maxLength: number;
  placeholder: string;
  min: number;
  max: number;
}

export interface Target {
  name: string;
  value: string;
}

export interface Props {
  inputs: Inputs[];
  error?: boolean;
  name: string;
  value?: string;
  onBlur(target: Target): void;
}
