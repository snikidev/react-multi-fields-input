import * as React from 'react';
import { Component } from 'react';
import { Input } from './views';
import { Props, Target } from './interfaces';

class MultiFieldsInput extends Component<Props> {
  constructor(props: Props) {
    super(props);

    const { value, name, inputs } = props;
    let stateValues = {};
    let previousEnd = 0;

    for (let i = 0; i < inputs.length; i++) {
      let maxLength = inputs[i].maxLength || inputs.length;
      let inputValueLength = previousEnd + maxLength;

      stateValues[`${name}${i}`] = value.substring(
        previousEnd,
        inputValueLength
      );
      previousEnd += maxLength;
    }

    this.state = {
      ...stateValues
    };
  }

  handleBlur = ({ target }: { target: Target }) => {
    this.setState(
      (state, props) => {
        const { name, value } = target;
        return {
          ...state,
          [name]: value
        };
      },
      () => {
        const { onBlur, name } = this.props;
        const { state } = this;
        let value = '';

        Object.keys(state).map(field => {
          value += state[field];
        });
        onBlur({ name, value });
      }
    );
  };

  handleChange = ({ target }: { target: Target }) => {
    const { inputs } = this.props;
    const { name, value } = target;
    this.setState({ [name]: value });

    const index = parseInt(name.substring(name.length - 1));
    if (value.length === inputs[index].maxLength) {
      const nextInput = document.querySelector(
        `input[name='${name.substring(0, name.length - 1)}${index + 1}']`
      );
      if (nextInput !== null) {
        nextInput.focus();
      }
    }
  };

  render() {
    const { inputs, error, name } = this.props;
    const { state } = this;

    const globalProps = {
      error,
      onChange: this.handleChange,
      onBlur: this.handleBlur
    };

    return (
      <div>
        {inputs.map((field, index) => {
          return (
            <Input
              {...field}
              {...globalProps}
              name={`${name}${index}`}
              value={state[`${name}${index}`]}
            />
          );
        })}
      </div>
    );
  }
}

export default MultiFieldsInput;
