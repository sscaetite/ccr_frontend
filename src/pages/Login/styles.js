import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const MainContainer = styled.div`
	display: flex;
	align-items: center;
	width: 100vw;
	height: 100vh;
	background: linear-gradient(270deg, #5A3E92 0%, #834399 100%);

	& img {
		width: 30%;
		margin: auto;
		margin-bottom: 4em;
  		display: block;
	}
`;

export const Divider = styled.hr`
	margin: 0 20px;
	background-color: rgba(255, 255, 255, 0.7);
	color: rgba(255, 255, 255, 0.7);
`;

export const Input = styled.input`
	display: block;
	background: none;
	color: white;
	padding: 1em 1.3em;
	text-align: center;
	box-sizing: border-box;
	border: none;
	width: calc(100% - 40px);
	margin: 20px;
	font-family: 'Poppins', sans-serif;
	font-size: 0.9em;

	&::placeholder {
		color: white;
	};

	&:focus{
		border: none;
	};
`;

export const FormLogin = styled.div`
`;

export const Button = styled(Link)`
	background: #FFFFFF;
	text-decoration: none;
	padding: 1em;
	box-sizing: border-box;
	display: block;
	margin: auto;
	text-align: center;
	width: calc(100% - 40px);
	box-shadow: 0px 0px 11px rgba(0, 0, 0, 0.25);
	border-radius: 4px;
	color: #5A3E92;
`;