React Multi Fields Input component comes with zero styles to allow you style it in accordance to your style guidelines.

See the code on [GitHub](https://github.com/kakuevn/react-multi-fields-input).

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

The object that is being returned `onBlur` and `onChange`:

```js static
{ name: '', value: ''}
```

Example:

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
  name="sortCode"
  inputs={inputs}
  value="202020"
  onBlur={data => console.log(data)}
  onChange={data => console.log(data)}
/>;
```

Example with error:

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
  onBlur={data => console.log(data)}
  onChange={data => console.log(data)}
/>;
```

Example with different input type, no auto focus:

```js
const inputs = [
  {
    type: 'text',
    maxLength: 2,
    placeholder: 'aa'
  },
  {
    type: 'text',
    maxLength: 2,
    placeholder: 'ss'
  },
  {
    type: 'text',
    maxLength: 2,
    placeholder: 'dd'
  },
  {
    type: 'text',
    maxLength: 2,
    placeholder: 'ff'
  }
];

<MultiFieldsInput
  label="Voucher Code"
  name="voucherCode"
  inputs={inputs}
  value="aassddff"
  autoFocus={false}
  onBlur={data => console.log(data)}
  onChange={data => console.log(data)}
/>;
```
