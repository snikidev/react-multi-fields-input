# React Multi Fields Input component

React Multi Fields Input component comes with zero styles to allow you style it in accordance to your style guidelines.

Example:

![react-multi-fields-input component no styles](https://github.com/kakuevn/react-multi-fields-input/raw/master/assets/rmfi-example-base.png)

Example with styles:

![react-multi-fields-input component](https://github.com/kakuevn/react-multi-fields-input/raw/master/assets/rmfi-example.png)



```js
const inputs = [
  {
    type: 'number',
    maxLength: 2,
    placeholder: '00'
  },
  {
    type: 'number',
    maxLength: 2,
    placeholder: '00'
  },
  {
    type: 'number',
    maxLength: 2,
    placeholder: '00'
  }
];

<MultiFieldsInput
  label="Sort Code"
  name="codeSort"
  inputs={inputs}
  value="202020"
  isValid={false}
  onBlur={() => {}}
  onChange={() => {}}
/>;
```

See more live examples on the [website](https://react-multi-fields-input.netlify.com/).

## Props

MultiFieldsInput component accepts the following props:

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

The object that is being returned `onBlur` and `onChange`:

```js static
{ name: '', value: ''}
```

## Develop

```
yarn
yarn start
```

Optional: To enable styles in styleguidist, uncomment `.scss` styles import on line 5 in `src/components/index.tsx`.

When done

```
yarn build
```