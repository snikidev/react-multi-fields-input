import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Button } from '@storybook/react/demo';

import { RoundBtn, Btn, PillBtn, OptionsList, PillOptions } from '../dist/index';
import '../dist/bundle.css';

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
	))
	.add('Options List', () => (
		<div>
			<OptionsList
				options={[
					{ name: 'insurance', value: 'home', text: 'Home', disabled: false },
					{ name: 'insurance', value: 'motor', text: 'Motor', disabled: false },
					{ name: 'insurance', value: 'business', text: 'Business', disabled: false },
					{ name: 'insurance', value: 'business1', text: 'Business', disabled: true },
					{ name: 'insurance', value: 'business2', text: 'Business', disabled: true },
					{ name: 'insurance', value: 'business3', text: 'Business', disabled: true },
					{ name: 'insurance', value: 'business4', text: 'Business', disabled: true }
				]}
				action={action('clicked')}
			/>
		</div>
	))
	.add('Pill Options', () => (
		<div>
			<PillOptions
				options={[
					{ name: 'insurance', value: 'home', text: 'Home' },
					{ name: 'insurance', value: 'motor', text: 'Motor' },
					{ name: 'insurance', value: 'business', text: 'Business' },
					{ name: 'insurance', value: 'pet', text: 'Pet' }
				]}
				action={action('clicked')}
			/>
		</div>
	));
