import styled from 'styled-components';

export const Filter = styled.div`
	display: inline-block;
	font-family: 'Poppins', sans-serif;
	margin: 1px;
	padding: 1px 6px;
	color: ${(props) => props.active ? 'white' : '#5A3E92'};
	background: ${(props) => props.active ? '#5A3E92' : 'white'};
	transition: all .2s ease-in-out;
`;

export const ScheduleCard = styled.div`
	display: inline-block;
	width: calc(40% - 20px);
	margin: 4px 0px;
	padding-left: 15px;
	border: solid #5A3E92 1px;
	border-radius: 6px;
	vertical-align: middle;
	& > div {
		font-family: 'Poppins', sans-serif;
		color: #5A3E92;
	}
	& .hour {
		font-size: 2em;
	};

	& .local {

	};
`;