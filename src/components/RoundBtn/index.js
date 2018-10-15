import React, { Component } from 'react';
import { vars } from '../../config/variables';

const style = {
	padding: '1em 2em',
	borderRadius: '40%',
	background: vars.colorWhite
};

class RoundBtn extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<button className="round-btn" style={style}>
				{this.props.children}
			</button>
		);
	}
}

export default RoundBtn;
