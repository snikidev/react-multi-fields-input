import React, { Component } from 'react';

interface Props {
  inputs: Array<{ 
    type: string,
    maxLength: number,
    placeholder: string,
    min: number,
    max: number 
  }>;
  connector: string;
  error: boolean;
  name: string;
  value: string;
  onBlur(): void;
}

class MultiFieldsInput extends Component {
  constructor(props) {
    super(props);

    const { value, name, inputs } =  props;
    let stateValues = {};
    let previousEnd = 0;
    
    for (let i = 0; i < inputs.length; i++) {
      let maxLength = parseInt(inputs[i].maxLength) || inputs.length;
      let inputValueLength = previousEnd + maxLength;

      stateValues[`${name}${i}`] = value.substring(previousEnd, inputValueLength);
      previousEnd += maxLength;
    }

    this.state = {
      ...stateValues
    }
  }

  handleBlur = ({ target }) => {
    this.setState((state, props) => {
      const { name, value } = target;
      return {
        ...state,
        [name]: value
      }
    }, () => {
      const { onBlur, name, connector } = this.props;
      const { state } = this;
      let value = '';

      Object.keys(state).map(field => {
        value += state[field];
      })
      onBlur({ name, value });
    });
  }

  handleChange = ({ target }) => {
    const { inputs } = this.props;
    const { name, value } = target;
    this.setState({ [name]: value });

    const index = parseInt(name.substring(name.length - 1));
    if (value.length === inputs[index].maxLength) {
      const nextInput = document.querySelector(`input[name='${name.substring(0, name.length - 1)}${index + 1}']`);
      if (nextInput !== null) {
        nextInput.focus()
      }
    }
  }

  render() {
    const { inputs, error, name } = this.props;
    const { state } = this;

    const globalProps = {
      error,
      onChange: this.handleChange,
      onBlur: this.handleBlur,
    };

    return (
      <div>
        {inputs.map((field, index) => {
          return (
          <Input {...field} {...globalProps} name={`${name}${index}`} value={state[`${name}${index}`]} />
        )})}
      </div>
    );
  }
}

export default MultiFieldsInput;
