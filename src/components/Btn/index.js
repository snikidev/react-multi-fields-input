import React, { Component } from 'react';

class Btn extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<button
				className={`btn ${this.props.primary ? 'primary-btn' : 'secondary-btn'}`}
				onClick={this.props.clickAction}
				disabled
			>
				{this.props.children}
			</button>
		);
	}
}

export default Btn;
