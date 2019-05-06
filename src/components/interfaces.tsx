interface Inputs {
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

export interface Props {
  inputs: Inputs[];
  name: string;
  onBlur(target: Target): void;
  onChange(target: Target): void;
  isValid?: boolean;
  value?: string;
  autoFocus?: boolean;
}

export interface DefaultProps {
  autoFocus: boolean;
  isValid: boolean;
}
