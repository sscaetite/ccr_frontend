import styled from 'styled-components';

export const HeaderContainer = styled.div`
	background-color: white;
	padding: 25px 10px;
	font-family: 'Poppins', sans-serif;
	font-size: 1.2em;
	letter-spacing: 0.16em;
	text-transform: uppercase;
	text-align: center;
	position: relative;
	margin-bottom: 25px;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	&::before {
		position: absolute;
		content: "";
		background-color: red;
		width: 100%;
		height: 100%;
		top: 11px;
		left: 0;
		z-index: -1;
		background: linear-gradient(270deg, #DE13FF 38.32%, #F44F8B 50%);
		box-shadow: 0px 4px 4px rgba(248, 27, 173, 0.25);
		border-radius: 11px;
	}
`