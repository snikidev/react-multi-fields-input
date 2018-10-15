import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Button } from '@storybook/react/demo';

import { RoundBtn, Btn, PillBtn } from '../dist/bundle';
import '../dist/bundle.css';

storiesOf('Button', module)
	.add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
	.add('with some emoji', () => (
		<Button onClick={action('clicked')}>
			<span role="img" aria-label="so cool">
				😀 😎 👍 💯
			</span>
		</Button>
	));

storiesOf('Buttons', module)
	.add('Round button', () => (
		<div>
			<RoundBtn clickAction={action('clicked')}>Close x</RoundBtn>
		</div>
	))
	.add('Theme buttons', () => (
		<div>
			<div style={{ marginBottom: '2em' }}>
				<Btn clickAction={action('clicked')} primary>
					Primary Button
				</Btn>
				<span style={{ marginRight: '2em' }} />
				<Btn clickAction={action('clicked')}>Secondary Button</Btn>
			</div>
			<div>
				<Btn clickAction={action('clicked')} primary disabled>
					Disabled Primary Button
				</Btn>
				<span style={{ marginRight: '1em' }} />
				<Btn clickAction={action('clicked')} disabled>
					Disabled Secondary Button
				</Btn>
			</div>
		</div>
	))
	.add('Pill button', () => (
		<div>
			<PillBtn
				buttons={[
					{ btnText: 'My Account', disabled: false, action: action('clicked') },
					{ btnText: 'Help', disabled: false, action: action('clicked') }
				]}
			/>
		</div>
	));
