import React from 'react';
import Header from '../../../components/Header';
import {IoMdCloudDownload} from 'react-icons/io';
import {Column, Image, DownloadButton} from './styles';

import images from '../../../services/imagesAPI_MOCK';

// eslint-disable-next-line react/prop-types
const ImageCard = ({src}) => {
	return(
		<div>
			<img src={src} alt='Image' />
			<DownloadButton href={src} download>
				<IoMdCloudDownload />
			</DownloadButton>
		</div>
	);
};

const GalleryPage = () => {
	return(
		<>
			<Header to='/photos'>Galeria</Header>
			<Column>
				<Image>
					{images.map((image, index) => (
						(index + 2 ) % 2 === 0 ? <ImageCard key={index} src={image.url} /> : null
					))}
				</Image>
			</Column>
			<Column>
				<Image>
					{images.map((image, index) => (
						(index + 2 ) % 2 === 1 ? <ImageCard key={index} src={image.url} /> : null
					))}
				</Image>
			</Column>
		</>
	);
};

export default GalleryPage;