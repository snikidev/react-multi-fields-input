import React, { Component } from 'react';

class PillBtn extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="pill-btn">
				{this.props.buttons &&
					this.props.buttons.map((button, i) => {
						return (
							<button
								className={`btn ${i === 0 ? 'pill-btn-left' : ''} ${i === this.props.buttons.length - 1
									? 'pill-btn-right'
									: ''}`}
								onClick={button.action}
								disabled={button.disabled}
							>
								{button.btnText}
							</button>
						);
					})}
			</div>
		);
	}
}

export default PillBtn;
