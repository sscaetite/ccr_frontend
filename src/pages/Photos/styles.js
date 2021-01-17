import {Link} from 'react-router-dom';
import styled from 'styled-components';

export const Button = styled(Link)`
	font-family: 'Poppis', sans-serif;
	position: relative;
	margin: auto;
	margin-bottom: 1em;
	text-decoration: none;
	color: white;
	letter-spacing: 0.1em;
	box-sizing: border-box;
	display: block;
	width: calc(100% - 20px);
	background: linear-gradient(270deg, #5A3E92 0%, #834399 100%);
	text-align: center;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	border-radius: 7px;
	padding: 3em 2em;
	-webkit-tap-highlight-color: transparent;
`;

export const Icon = styled.div`
	color: rgba(0, 0, 0, 0.1);
	position: absolute;
	font-size: 6em;
	top: 50%;
	margin-top: -48px;
	left: 50%;
	margin-left: -48px;
	z-index: 0;
`;

export const Title = styled.h1`
	font-family: 'Poppis', sans-serif;
	padding: 10px;
	margin: 2em 0;
	text-align: center;
	font-weight: 500;
	font-size: 1.4em;
	position: relative;

	&::after {
		content: "";
		position: absolute;
		width: 10%;
		height: 3px;
		background: linear-gradient(270deg, #5A3E92 0%, #834399 100%);
		bottom: 0;
		left: 0;
	};
`;