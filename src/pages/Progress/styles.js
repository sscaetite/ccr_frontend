import styled from 'styled-components';

export const ProgressContainer = styled.div`
	background: #FFFFFF;
	box-sizing: border-box;
	padding: 2em;
	box-shadow: 0px 0px 11px rgba(0, 0, 0, 0.25);
	border-radius: 4px;
	margin: auto;
	width: calc(100% - 10px);
	box-sizing: border-box;
`;

export const CircularGradient = styled.div`
	width: 13em;
	margin: auto;
	height: 13em;
	display: flex;	
	align-items: center;
	justify-content: center;
	border-radius: 10em;
	background: conic-gradient(
		from 0.48deg at 50% 50%, 
		#5A3E92 0%, 
		#834399 ${(props) => props.percent/2 + '%'}, 
		white ${(props) => props.percent/2 + '%'}, 
		white ${(props) => 100 - props.percent/2 + '%'}, 
		#834399 ${(props) => 100 - props.percent/2 + '%'},
		#5A3E92 100%
	);
	 & > div {
		width: 11em;
		height: 11em;
		box-sizing: border-box;
		border: solid 5px white;
		border-radius: 8em;
		background-image: url(${(props) => props.url});
		background-position: center;
		background-size: cover;
		position: relative;
	 };

	 & > div > div {
		font-family: 'Poppins', sans-serif;
		color: white;
		font-size: 1.3em;
		font-weight: 800;
		width: 2.2em;
		height: 2.2em;
		box-sizing: border-box;
		border-radius: 3em;
		border: solid 5px white;
		display: flex;
		align-items: center;
		justify-content: center;
		background: #5A3E92;
		position: absolute;
		bottom: -1em;
		left: 50%;
		margin-left: -1.2em;
	 };
`;