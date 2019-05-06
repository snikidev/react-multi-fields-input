export interface Inputs {
  type: 'number' | 'text';
  maxLength: number;
  placeholder: string;
  min?: number;
  max?: number;
}

export interface Target {
  name: string;
  value: string;
}

export interface DefaultProps {
  autoFocus: boolean;
  isValid: boolean;
}

export interface Props extends DefaultProps {
  inputs: Inputs[];
  name: string;
  onBlur(target: Target): void;
  onChange(target: Target): void;
  value?: string;
  label?: string;
}
