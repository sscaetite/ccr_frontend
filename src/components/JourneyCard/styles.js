import styled from 'styled-components';

export const JourneyContainer = styled.div`
	background: ${(props) => props.bg || 'linear-gradient(270deg, #CC13EA, #F81BAD)'};
	padding: 26px 25px;
	margin: 12px 9px;
	color: white;
	text-align: center;
	position: relative;
	border-radius: 10px;
	font-family: 'Poppins', sans-serif;
	letter-spacing: 0.2em;	
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	&::after {
		content: '${(props) => props.after}';
		position: absolute;
		color: ${(props) => props.af || 'rgba(0, 0, 0, 0.16)'};
		top: 0px;
		left: 10px;
		font-family: 'Anton', sans-serif;
		font-size: 2.6rem;
		font-weight: 800;
	}
`;   