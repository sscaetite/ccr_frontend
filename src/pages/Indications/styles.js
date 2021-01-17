import styled, {css} from 'styled-components';

export const Selector = styled.div`
	width: calc(100% - 10px);
	margin: auto;
	padding: 0;
	background: #FFFFFF;
	box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.25);
	border-radius: 5px;
	position: relative;

	& h4 {
		margin: 0;
		width: 50%;
		box-sizing: border-box;
		font-family: 'Poppins', sans-serif;
		padding: 1em 1em;
		text-align: center;
		display: inline-block;
		position: relative;
		transition: color .2s ease-in-out;
		z-index: 2;

	};

	&::after {
		content: '';
		width: 50%;
		height: 100%;
		margin: 0;
		padding: 0;
		background: linear-gradient(270deg, #5A3E92 0%, #834399 100%);
		box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.25);
		border-radius: 5px;
		position: absolute;
		transform: translateX(50%); 
		transition: transform .2s ease-in;
		top: 0;
		left: 0;
		${(props) => props.active === 0 ? css`
		transform: translateX(0%);` : css`
		transform: translateX(100%)`};
		z-index: 1;
	};
`;

