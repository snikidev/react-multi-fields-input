export interface Target {
  name: string;
  value: string;
}

export interface Props {
  inputs: Array<{
    type: string;
    maxLength: number;
    placeholder: string;
    min: number;
    max: number;
  }>;
  connector: string;
  error: boolean;
  name: string;
  value: string;
  onBlur(target: Target): void;
}
