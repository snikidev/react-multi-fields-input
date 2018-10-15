import React, { Component } from 'react';

class RoundBtn extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<button className="btn round-btn" onClick={this.props.clickAction}>
				{this.props.children}
			</button>
		);
	}
}

export default RoundBtn;
