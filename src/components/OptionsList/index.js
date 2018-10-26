import React, { Component } from 'react';

class OptionsList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			checked: '',
			showHidden: false
		};
		this.handleCheck = this.handleCheck.bind(this);
		this.openMore = this.openMore.bind(this);
	}

	handleCheck(e) {
		this.setState({
			checked: e.target.value
		});

		this.props.action(e.target);
	}

	openMore(e) {
		e.preventDefault();
		this.setState({ showHidden: true });
	}

	render() {
		let options = [];

		this.props.options.map((option, i) => {
			options.push(
				<label
					key={i}
					htmlFor={`${option.name}${option.value}`}
					className={`single-option ${this.state.checked === option.value
						? 'checked-option'
						: ''} ${option.disabled ? 'disabled-option' : ''}`}
					disabled={option.disabled}
				>
					<input
						type="radio"
						id={`${option.name}${option.value}`}
						name={option.name}
						value={option.value}
						onChange={this.handleCheck}
						disabled={option.disabled}
					/>
					{option.text}
				</label>
			);
		});

		return (
			<form action="" className="flex justify-content-center align-items-center flex-column">
				{options.length <= 4 && options}
				{options.length > 4 && options.slice(0, 3)}
				{!this.state.showHidden &&
				options.length > 4 && (
					<label
						htmlFor={`${options[0].name}-more`}
						className={`single-option ${this.state.checked === 'more' ? 'checked-option' : ''}`}
					>
						<input
							type="radio"
							id={`${options[0].name}-more`}
							name={options[0].name}
							value="more"
							onChange={this.openMore}
						/>
						More
					</label>
				)}
				{this.state.showHidden && options.slice(3)}
			</form>
		);
	}
}

export default OptionsList;
