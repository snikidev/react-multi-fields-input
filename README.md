- prepare Readme
- disable style
- run tests & update snapshots
- build package
- deploy package
- build static site
- website deploy script

# React Multi Fields Input component

React Multi Fields Input component comes with zero styles to allow you style it in accordance to your style guidelines.

![react-multi-fields-input component](https://github.com/kakuevn/react-multi-fields-input/raw/develop/src/assets/rmfi.png)

Props that MultiFieldsInput component accepts:

```js static
{
  inputs: Inputs[];
  name: string;
  onBlur(target: Target): void;
  onChange(target: Target): void;
  isValid?: boolean;
  value?: string;
  autoFocus?: boolean;
}
```

`inputs` is an array of objects that are constructed of

```js static
{
  type: 'number' | 'text';
  maxLength: number;
  placeholder: string;
  min?: number;
  max?: number;
}
```

The values that are being returned `onBlur` and `onChange` (i.e. `Target` interface):

```js static
{ name: '', value: ''}
```
