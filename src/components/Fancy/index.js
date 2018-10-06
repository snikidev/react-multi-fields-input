import React, { Component } from 'react';
import styled from 'styled-components';

const Block = styled.div`
	font-size: 4em;
	color: papayawhip;
	background: #bada55;
`;

class Fancy extends Component {
	render() {
		return <Block className="fancy">A fancy component with some emojis 🔥🍻</Block>;
	}
}

export default Fancy;
