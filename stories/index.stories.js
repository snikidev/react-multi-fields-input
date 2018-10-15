import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Button } from '@storybook/react/demo';

import { RoundBtn, Btn } from '../dist/bundle';
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
			<Btn clickAction={action('clicked')} primary>
				Primary Button
			</Btn>
			<span style={{ marginRight: '2em' }} />
			<Btn clickAction={action('clicked')}>Secondary Button</Btn>
		</div>
	));
