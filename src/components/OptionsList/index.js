import React, { Component } from 'react';

class OptionsList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			checked: ''
		};
		this.handleCheck = this.handleCheck.bind(this);
	}

	handleCheck(e) {
		this.setState({
			checked: e.target.id
		});

		this.props.action(e.target.value);
	}

	render() {
		return (
			<form action="" className="options-block">
				{this.props.options &&
					this.props.options.map((option, i) => (
						<label
							key={i}
							for={option.value}
							className={`single-option ${this.state.checked === option.value
								? 'checked-option'
								: ''} ${option.disabled ? 'disabled-option' : ''}`}
							disabled={option.disabled}
						>
							<input
								type="radio"
								id={option.value}
								name={option.name}
								value={option.value}
								onChange={this.handleCheck}
								disabled={option.disabled}
							/>
							{option.text}
						</label>
					))}
			</form>
		);
	}
}

export default OptionsList;
