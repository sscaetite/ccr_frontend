import styled from 'styled-components';

export const Column = styled.div`
	width: 50%;
	display: inline-block;
	vertical-align: top;
`;

export const Image = styled.div`
	width: 100%;

	& div {
		position: relative;
	}

	& img {
		width: calc(100% - 4px);
	};
`;

export const DownloadButton = styled.a`
	position: absolute;
	bottom: 0px;
	right: 10px;
	color: white;
	font-size: 1.4em;
`;