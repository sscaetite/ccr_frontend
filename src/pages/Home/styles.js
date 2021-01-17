import {Link} from 'react-router-dom';
import styled from 'styled-components';

export const Card = styled(Link)`
	display: inline-block;
	padding: 1.5em 1em;
	margin-bottom: 20px;
	box-sizing: border-box;
	width: calc(50% - 10px);
	background: #FFFFFF;
	box-shadow: 0px 0px 9px rgba(0, 0, 0, 0.15);
	border-radius: 4px;
	color: black;
	text-decoration: none;
	-webkit-tap-highlight-color: transparent;
`;

export const CardsContainer = styled.div`
	display: flex;
	padding: 15px 16px;
	flex-wrap: wrap;
	justify-content: space-between;
`;

export const Title = styled.h3`
	font-family: 'Poppins', sans-serif;
	font-size: 1.1em;
	font-weight: 400;
	padding: 0;
	margin: 0;
	display: block;
	text-align: center;
`;

export const Icon = styled.div`
	display: flex;
	justify-content: center;
	font-size: ${(props) => props.size || '3.8em'};
	margin-bottom: 10px;
	color: #5A3E92;
`;

export const MainCard = styled.div`
	display: flex;
	align-items: center;
	margin: 10px 16px;
	background: linear-gradient(270deg, #5A3E92 0%, #834399 100%);
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	border-radius: 4px;
	color: white;
	font-family: 'Poppins', sans-serif;

	& > div {
		margin-left: 1.3em;
		position: relative;
	}

	& > div::after {
		content: '';
		position: absolute;
		width: 1px;
		background-color: white;
		height: 100%;
		top: 0;
		left: -1.3em;
	}

	& > img {
		width: 30%;
		padding: 2em 1.3em;
	};

	& h2 {
		padding: 0;
		margin: 0;
		font-weight: 400;
		font-size: 1em;
	};

	& h1 {
		padding: 0;
		margin: 0;
	};
`;