import React, { Component } from 'react';

class Btn extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<button
				className={`text-uppercase text-bold btn ${this.props.primary ? 'primary-btn' : 'secondary-btn'}`}
				onClick={this.props.clickAction}
				disabled={this.props.disabled}
			>
				{this.props.children}
			</button>
		);
	}
}

export default Btn;
