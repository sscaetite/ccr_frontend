import styled from 'styled-components';

export const HeaderContainer = styled.div`
	background-color: white;
	width: 100vw;
	padding: 25px 10px;
	box-sizing: border-box;
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
		background: linear-gradient(270deg, #5A3E92 0%, #834399 100%);
		box-shadow: 0px 4px 4px rgba(131, 67, 153, 0.33);
		border-radius: 11px;
	}
`;