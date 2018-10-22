import React, { Component } from 'react';

class PillOptions extends Component {
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
			<form action="" className="flex justify-content-center align-items-center flex-wrap">
				{this.props.options &&
					this.props.options.map((option, i) => (
						<label
							key={i}
							htmlFor={option.value}
							className={`single-pill-option 
					${this.state.checked === option.value ? 'checked-option' : ''}  
					${i === 0 && 'pill-option-left'}
					${i === this.props.options.length - 1 && 'pill-option-right'}
					`}
						>
							<input
								type="radio"
								id={option.value}
								name={option.name}
								value={option.value}
								onChange={this.handleCheck}
							/>
							{option.text}
						</label>
					))}
			</form>
		);
	}
}

export default PillOptions;
