import * as React from 'react';
import { Component } from 'react';
import * as classNames from 'classnames';
import { Props, Target, DefaultProps } from './interfaces';

import './index.scss';

class MultiFieldsInput extends Component<Props> {
  constructor(props: Props) {
    super(props);

    const stateValues = this.formatFields(props);
    this.state = {
      ...stateValues
    };
  }

  public static defaultProps: DefaultProps = {
    autoFocus: true,
    isValid: true
  };

  componentDidUpdate(prevProps: Props) {
    const { value } = this.props;
    if (prevProps.value !== value) {
      const stateValues = this.formatFields(this.props);
      this.setState({ stateValues });
    }
  }

  formatFields = (data: Props) => {
    const { value, name, inputs } = data;
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

    return stateValues;
  };

  getValue() {
    const { state } = this;
    let value = '';
    Object.keys(state).map(field => {
      value += state[field];
    });
    return value;
  }

  handleBlur = ({ target }: { target: Target }) => {
    this.setState(
      state => {
        const { name, value } = target;
        return {
          ...state,
          [name]: value
        };
      },
      () => {
        const { onBlur, name } = this.props;
        const value = this.getValue();
        onBlur({ name, value });
      }
    );
  };

  handleChange = ({ target }: { target: Target }) => {
    const { inputs, autoFocus, onChange } = this.props;
    const { name, value } = target;
    this.setState({ [name]: value });

    // fire on change function if passed as a prop
    if (onChange) {
      const finalValue = this.getValue();
      onChange({ name, value: finalValue });
    }

    // change focus to the next field
    if (autoFocus) {
      const index = parseInt(name.substring(name.length - 1));
      if (value.length === inputs[index].maxLength) {
        const nextInput = document.querySelector(
          `input[name='${name.substring(0, name.length - 1)}${index + 1}']`
        ) as HTMLElement;
        if (nextInput !== null) {
          nextInput.focus();
        }
      }
    }
  };

  render() {
    const { inputs, isValid, name } = this.props;
    const { state } = this;

    const globalProps = {
      isValid,
      onChange: this.handleChange,
      onBlur: this.handleBlur
    };

    return (
      <div className="rmfi-container">
        {inputs.map((field, index) => {
          return (
            <input
              key={`${name}-${index}`}
              name={`${name}${index}`}
              value={state[`${name}${index}`]}
              className={classNames([
                `rmfi-input rmfi-input-${index}`,
                {
                  'rmfi-error': !isValid
                }
              ])}
              {...globalProps}
              {...field}
            />
          );
        })}
      </div>
    );
  }
}

export default MultiFieldsInput;
