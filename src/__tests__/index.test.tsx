import * as React from 'react';
import { shallow, mount } from 'enzyme';
//@ts-ignore
import * as sinon from 'sinon';

import MultiFieldsInput from '../components/index';

describe('MultiFieldsInput', () => {
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

  it('Renders correctly', () => {
    const component = shallow(
      <MultiFieldsInput
        label="Sort Code"
        name="sortCode"
        //@ts-ignore
        inputs={inputs}
        value="202020"
        onBlur={() => {}}
        onChange={() => {}}
      />
    );
    expect(component).toMatchSnapshot();
  });

  it('Calls onBlur and onChange and sends the correct value', () => {
    const spyBlur = sinon.spy();
    const spyChange = sinon.spy();
    const component = mount(
      <MultiFieldsInput
        label="Sort Code"
        name="sortCode"
        //@ts-ignore
        inputs={inputs}
        value="202122"
        onBlur={spyBlur}
        onChange={spyChange}
      />
    );

    component
      .find('input[name="sortCode0"]')
      .simulate('change', { target: { name: 'sortCode0', value: '10' } });

    expect(spyChange.calledOnce).toBe(true);
    component.update();
    expect(component.find('input[name="sortCode0"]').prop('value')).toBe('10');
    //call getValue() method and see if it returns the correct value as well
  });

  it('Error class is activated when not valid', () => {
    // expect(component).toMatchSnapshot();
  });
});
