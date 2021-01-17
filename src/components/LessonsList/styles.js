import styled, {css} from 'styled-components';

export const Step = styled.div`
	background: linear-gradient(270deg, #5A3E92 0%, #834399 100%);
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	border-radius: 4px;
	font-family: Poppins;
	font-style: normal;
	font-weight: 500;
	font-size: 17px;
	line-height: 25px;
	letter-spacing: 0.16em;
	text-transform: uppercase;
	text-align: center;
	color: #FFFFFF;
	box-sizing: border-box;
	width: calc(100% - 10px);
	margin: auto;
	margin-top: 1em;
	padding: 1.5em 1em;
	position: relative;

	& .icon-right {
		padding: 1em;
		font-size: 1.45em;
		position: absolute;
		top: 0;
		right: 0;
		transition: transform 0.2s ease-out;
		${(props) => props.rotate && css`
			transform: rotate(180deg);
		`};
	};
`;

export const Lesson = styled.div`
	background: #FFFFFF;
	box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.51);
	border-radius: 4px;
	font-family: 'Poppins', sans-serif;
	font-style: normal;
	font-weight: 300;
	font-size: 17px;
	line-height: 25px;
	color: #000000;
	text-align: center;
	box-sizing: border-box;
	width: calc(100% - 30px);
	margin: auto;
	margin-top: 0.3em;
	display: ${(props) => props.show ? 'block' : 'none'};
`;