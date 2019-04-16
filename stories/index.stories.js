import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Button } from '@storybook/react/demo';

storiesOf('Buttons', module)
	.add('Round button', () => (
		<div>
			<Button clickAction={action('clicked')}>Button</Button>
		</div>
	));