import * as React from 'react';
import { Component } from 'react';
import * as classNames from 'classnames';
import { Props, Target } from './interfaces';
import * as styles from './styles';

class MultiFieldsInput extends Component<Props> {
  constructor(props: Props) {
    super(props);
    
    const stateValues = this.formatFields(props);
    this.state = {
      ...stateValues
    }
  }

  componentDidUpdate(prevProps: Props) {
    const { value } = this.props;
    if (prevProps.value !== value) {
      const stateValues = this.formatFields(this.props);
      this.setState({ stateValues })
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
      ) as HTMLElement;
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
      <div style={styles.container}>
        {inputs.map((field, index) => {
          return (
            <input
              key={`${name}-${index}`}
              style={styles.input}
              name={`${name}${index}`}
              value={state[`${name}${index}`]}
              className={classNames([
                `rmfi-input rmfi-input-${index}`,
                {
                  'rmfi-error': error
                }
              ])}
              {...field}
              {...globalProps}
            />
          );
        })}
      </div>
    );
  }
}

export default MultiFieldsInput;
