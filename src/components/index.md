MultiFieldsInput example:

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

MultiFieldsInput example with error:

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
  isValid={false}
  onBlur={data => console.log(data)}
  onChange={data => console.log(data)}
/>;
```

MultiFieldsInput example with different input type, no auto focus:

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
  label="Sort Code"
  name="sortCode"
  inputs={inputs}
  value="aassddff"
  autoFocus={false}
  onBlur={data => console.log(data)}
  onChange={data => console.log(data)}
/>;
```
