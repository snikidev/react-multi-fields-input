interface Inputs {
  type: string;
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
  connector: string;
  error: boolean;
  name: string;
  value: string;
  onBlur(target: Target): void;
}
